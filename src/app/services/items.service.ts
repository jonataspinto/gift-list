import {Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Contato } from '../models/contato';
import { Item } from '../models/item';

@Injectable({
    providedIn: 'root'
})

export class ItemService {
    constructor(private db: AngularFireDatabase){ }

    insert(item: Item){
        this.db.list('items').push(item)
            .then((result: any) => {
                console.log(result.key);
            });
    }

    update(item: Item, key: string){
        this.db.list('contato').update(key, item)
            .catch((error: any) => {
                console.log(error);
            });
    }

    getAll(){
        return this.db.list('items')
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes.map(c => {
                  console.log(c.payload.val())
                  return ({ key: c.payload.key, ...c.payload.val()})
                });
            })
        );
    }

    delete(key: string){
        this.db.list('contato').remove(key);
    }

}
