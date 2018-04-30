import { Component } from '@angular/core';
import {UserService} from "../../service/UserService"
import {User} from "../../model/user.model";
import { Globals} from "../../globalVariable/globals";

//import * as bcrypt from "bcryptjs";


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
  img:string;
  global:Globals;
  confPassword:string;
  userService:UserService;
  byteArray:Uint8Array;

  constructor(serv:UserService,g:Globals) {
    this.global=g;
    this.userService=serv;

  }


  register(){
    if(this.password==this.confPassword){

     // var hash = bcrypt.hashSync(this.password, 10);

      let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.img); // todo hash
      var params:string;
      params="http://localhost:8080/user/add";
      this.userService.registerService(params,user);
    } else{
      alert("your password doesn't match with your confirmation!");
    }
  }
}

