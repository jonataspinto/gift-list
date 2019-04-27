import {Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Contato } from '../models/contato';

@Injectable({
    providedIn: 'root'
})

export class ContatoService {
    constructor(private db: AngularFireDatabase){ }

    insert(contato: Contato){
        this.db.list('contato').push(contato)
            .then((result: any) => {
                console.log(result.key);
            });
    }

    update(contato: Contato, key: string){
        this.db.list('contato').update(key, contato)
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
