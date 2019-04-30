import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/services/items.service';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Observable<any>;

  constructor(private itemService: ItemService, private itemDataService: ItemDataService) { }

  ngOnInit() {
   this.list()
  }

  async list(){
    this.items = await this.itemService.getAll();
    console.log("LIST - ", this.items)
  }

  delete(key: string){
    this.itemService.delete(key);
  }

  edit(item: Item, key: string){
    this.itemDataService.changeItem(item, key);
  }
}
