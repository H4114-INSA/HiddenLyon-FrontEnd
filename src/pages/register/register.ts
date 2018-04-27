import { Component } from '@angular/core';
import {UserService} from "../../service/UserService"
import {User} from "../../model/user.model";
import {Globals} from "../../globalVariable/globals";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[UserService]
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
      let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.path);
      var params:string;
      params="http://localhost:8080/user/add";
      this.userService.registerService(params,user);
      }else{
      alert("your password doesn't match with your confirmation!");
    }
  }
}

