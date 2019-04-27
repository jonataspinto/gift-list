import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoService } from '../../services/items.service';
import { ContatoDataService } from '../../services/contato-data.service';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Observable<any>;

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
   this.list()
  }

  async list(){
    this.items = await this.contatoService.getAll();
    console.log("LIST - ", this.items)
  }

  delete(key: string){
    this.contatoService.delete(key);
  }

  edit(contato: Contato, key: string){
    this.contatoDataService.changeContato(contato, key);
  }
}
