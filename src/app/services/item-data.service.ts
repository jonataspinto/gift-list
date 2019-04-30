import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  private itemSource = new BehaviorSubject({ item: null, key: ''});
  currentItem = this.itemSource.asObservable();

  constructor() { }

  changeItem(item: Item, key: string){
    this.itemSource.next({ item, key: key });
  }
}
