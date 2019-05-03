import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new Subject<string>()

  constructor() {
    this.user.next(this.getUser())
  }

  getUser(){
    return localStorage.getItem("name")
  }

  setUser({name, dateBirth}){
    localStorage.setItem("name", name)
    localStorage.setItem("dateBirth", dateBirth)
    this.user.next(this.getUser())
  }
}
