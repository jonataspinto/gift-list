import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Friend } from 'src/app/models/friend';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navOpened = false;
  public user = new Friend()

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => this.user = user)
   this.userService.updateUser()
  }

  toggleNav() {
    this.navOpened = !this.navOpened;
  }

  logout(){
   this.userService.logout();
   this.userService.updateUser()
  }

}
