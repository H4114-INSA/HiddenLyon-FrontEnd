import { Component } from '@angular/core';
import {AppService} from "../../app/appService";
import {User} from "../../model/user.model";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AppService]
})
export class RegisterPage {
  fname:string;
  lname:string;
  mail:string;
  password:string;
  bio:string;
  path:string;
  confPassword:string;
  appService:AppService;
  constructor(serv:AppService) {
    this.appService=serv;
  }
  register(){
    console.log("bonjour2");
    if(this.password==this.confPassword){
      console.log("bonjour");
    let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.path);
    var params:string;
    params="http://localhost:8080/user/all";
    this.appService.registerService(params,user);}
    else{
      console.log("your password doesn't match with your confirmation!");
  }
  }
}

