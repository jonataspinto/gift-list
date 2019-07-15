import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/items.service';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/models/item';
import { UserService } from 'src/app/services/user.service';
import { Friend } from 'src/app/models/friend';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = [];
  // items: Observable<any>;
  user

  constructor(private userService: UserService, private itemService: ItemService, private itemDataService: ItemDataService) { }

  ngOnInit() {
   this.list()
   this.userService.user.subscribe(user => this.user = user)
   this.userService.user.next(this.userService.getUser())
  }

  list(){
    this.itemService.getAll().subscribe(items => {
      this.items = items
      console.log("UPDATE LIST - ", items)
    });
    // this.items = this.itemService.getAll();
    // this.items.subscribe(console.log)
  }

  delete(key: string){
    this.itemService.delete(key);
  }

  assign(item: Item){
    const assignedItem = {...item, assigned: this.userService.getUser()}
    this.itemService.update(assignedItem);
    console.log(assignedItem)
  }

  unassign(item: Item){
    const unassignedItem = {...item, assigned: new Friend()}
    this.itemService.update(unassignedItem);
  }
}
