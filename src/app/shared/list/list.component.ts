import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/items.service';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/models/item';
import { UserService } from 'src/app/services/user.service';
import { Friend } from 'src/app/models/friend';
import { isEmpty } from '../../helpers/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Observable<any>;
  user

  constructor(private userService: UserService, private itemService: ItemService, private itemDataService: ItemDataService) { }

  ngOnInit() {
   this.list()
   this.userService.user.subscribe(user => this.user = user)
   this.userService.user.next(this.userService.getUser())
  }

  list(){
    this.items = this.itemService.getAll();
    this.items.subscribe(console.log)
  }

  delete(key: string){
    this.itemService.delete(key);
  }

  assign(item: Item){
    const assignedItem = {...item, assigned: this.userService.getUser()}
    this.itemService.update(assignedItem);
  }

  unassign(item: Item){
    const unassignedItem = {...item, assigned: new Friend()}
    this.itemService.update(unassignedItem);
  }

  validUser(item){
    if(!item.assigned.name)
    return false
    return item.assigned.name.toUpperCase() === this.user.name.toUpperCase() && item.assigned.dateBirth === this.user.dateBirth
  }

  isAssigned(item: Item){
    if(!item.assigned.name)
    return false
    return true
  }
}
