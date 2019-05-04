import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new Subject<string>()

  constructor() {
    this.updateUser();
    }

  logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("dateBirth");
  }

  updateUser(){
    const user = {
      name: localStorage.getItem("name"),
      dateBirth: localStorage.getItem("dateBirth")
    }
    
    this.user.next()
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
