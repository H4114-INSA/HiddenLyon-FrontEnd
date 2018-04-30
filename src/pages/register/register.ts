import { Component } from '@angular/core';
import {UserService} from "../../service/UserService"
import {User} from "../../model/user.model";
import * as bcrypt from "bcryptjs";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fname:string;
  lname:string;
  mail:string;
  password:string;
  bio:string;
  path:string;
  confPassword:string;
  userService:UserService;

  constructor(serv:UserService) {
    this.userService=serv;
  }
  register(){
    if(this.password==this.confPassword){

      var hash = bcrypt.hashSync(this.password, 10);

      let user=new User(this.fname,this.lname,this.mail,hash,this.bio,this.path);
      var params:string;
      params="http://localhost:8080/user/add";
      this.userService.registerService(params,user);
    } else{
      alert("your password doesn't match with your confirmation!");
    }
  }
}

