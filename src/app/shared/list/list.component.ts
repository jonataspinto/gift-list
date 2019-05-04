import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/items.service';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/models/item';
import { UserService } from 'src/app/services/user.service';

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

  async list(){
    this.items = await this.itemService.getAll();
  }

  delete(key: string){
    this.itemService.delete(key);
  }

  assign(item: Item){
    const assignedItem = {...item, assigned: this.userService.getUser()}
    this.itemService.update(assignedItem);
  }
  unassign(item: Item){
    const unassignedItem = {...item, assigned: ""}
    this.itemService.update(unassignedItem);
  }
}
