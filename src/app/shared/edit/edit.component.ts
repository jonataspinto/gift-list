import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { ContatoDataService } from '../../services/contato-data.service';
import { Item } from 'src/app/models/item';
import { ItemDataService } from 'src/app/services/item-data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  item: Item
  key: string = '';

  constructor(private itemService: ItemService, private itemDataService: ItemDataService) { }

  ngOnInit() {
    this.loadContato()

  }

  cancelar(){
    this.item = new Item();
    this.itemDataService.changeItem(this.item, "")
  }

  loadContato(){
    this.item = new Item();
    this.itemDataService.currentItem.subscribe( data => {
      console.log(data)
      this.item = new Item();
      this.key = "";
      if(data.item && data.key) {
        this.item.name = data.item.name;
        this.item.imgSrc = data.item.imgSrc;
        this.key = data.key;
      }
    })
  }

  onSubmit(){
    if(this.key){
      this.itemService.update(this.item)
    }else{
      this.itemService.insert(this.item);
    }

    this.item = new Item();
  }

}
