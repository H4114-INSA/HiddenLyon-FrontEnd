import { Component } from '@angular/core';
import {UserService} from "../../service/UserService"
import {User} from "../../model/user.model";
import { Globals} from "../../globalVariable/globals";
import {UserExtended} from "../../model/userExtended.model";

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


  constructor(serv:UserService,g:Globals) {
    this.global=g;
    this.userService=serv;
  }


  register(){
    if(this.password==this.confPassword){
      this.img = (<HTMLParagraphElement>document.getElementById("url")).innerHTML;
      console.log(this.img);
     // var hash = bcrypt.hashSync(this.password, 10);

      let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.img);
      var params:string;
      params="http://localhost:8080/user/add";
      this.userService.registerService(params,user);
    } else{
      alert("your password doesn't match with your confirmation!");
    }
  }


  getImage(event){

    var reader = new FileReader();
    reader.onloadend = function(e : any) {
        (<HTMLImageElement>document.getElementById("avatar")).src = e.target.result;
        (<HTMLParagraphElement>document.getElementById("url")).innerHTML = e.target.result;
    };
    reader.readAsDataURL((<HTMLInputElement>document.getElementById("img")).files[0]);
  }



}

