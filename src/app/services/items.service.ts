import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Contato } from '../models/contato';
import { Item } from '../models/item';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  user

  constructor(private db: AngularFireDatabase, private userService: UserService) {
    this.userService.user.subscribe(user => this.user = user)
    this.userService.user.next(this.userService.getUser())

  }

  insert(item: Item) {
    this.db.list('items').push(item)
  }

  update(item: Item) {
    this.db.list('items').update(item.key, item)
      .catch((error: any) => {
        console.log(error);
      });
  }

  getAll() {
    return this.db.list('items', ref => ref.orderByChild('name'))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
            isAssigned: this.isAssigned(c.payload.val()),
            isValid: this.isValid(c.payload.val()),
          }));
        })
      );
  }

  isValid(item) {
    // console.log(item, this.user)
    if (!item.assigned.name || !item.assigned)
      return false
    return item.assigned.name.toUpperCase() === this.user.name.toUpperCase() && item.assigned.dateBirth === this.user.dateBirth
  }

  isAssigned(item) {
    if (!item.assigned.name)
      return false
    return true
  }

  delete(key: string) {
    this.db.list('items').remove(key);
  }

}
