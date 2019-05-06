import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { isEmpty } from './../../helpers/common'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private userService: UserService) {   }

  public isUser = false;

  ngOnInit() {
    this.userService.user.subscribe(res=>this.isUser=!isEmpty(res))
    this.userService.user.next(this.userService.getUser())
  }

  save(name, dateBirth){
    const user = {
      name: name,
      dateBirth: dateBirth
    }
    this.userService.setUser(user)
  }

}
