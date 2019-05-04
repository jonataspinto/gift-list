import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navOpened = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  toggleNav() {
    this.navOpened = !this.navOpened;
  }

  logout(){
   this.userService.logout();
   this.userService.updateUser()
  }

}
