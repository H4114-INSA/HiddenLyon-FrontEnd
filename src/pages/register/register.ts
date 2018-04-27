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
  confPassword:string;
  appService:AppService;
  constructor(serv:AppService) {
    this.appService=serv;
  }
  register(){
    if(this.password==this.confPassword){
    //let user=new User(this.fname,this.lname,this.mail,this.password,this.bio);
    var params:string;
    params="http://localhost:8080/user/all";
    console.log("Test");
    this.appService.registerService(params);}
    else{
    alert("your password doesn't match with your confirmation!");
  }
  }
}

