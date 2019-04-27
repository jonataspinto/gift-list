import { Component, OnInit } from '@angular/core';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../services/items.service';
import { ContatoDataService } from '../../services/contato-data.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contato: Contato
  key: string = '';

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.loadContato()

  }

  cancelar(){
    this.contato = new Contato();
    this.contatoDataService.changeContato(this.contato, "")
  }

  loadContato(){
    this.contato = new Contato();
    this.contatoDataService.currentContato.subscribe( data => {
      console.log(data)
      this.contato = new Contato();
      this.key = "";
      if(data.contato && data.key) {
        this.contato.name = data.contato.name;
        this.contato.telefone = data.contato.telefone;
        this.key = data.key;
      }
    })
  }

  onSubmit(){
    if(this.key){
      this.contatoService.update(this.contato, this.key)
    }else{
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
  }

}
