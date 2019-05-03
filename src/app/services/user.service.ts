import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(){
    return localStorage.getItem("userName")
  }

  setUser(userName){
    localStorage.setItem("userName", userName)
  }
}
