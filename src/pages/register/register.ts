import { Component } from '@angular/core';
import {UserService} from "../../service/UserService"
import {User} from "../../model/user.model";
import { Globals} from "../../globalVariable/globals";
import {UserExtended} from "../../model/userExtended.model";

import{Router} from "@angular/router";


import * as bcrypt from "bcryptjs";
import {Validation} from "../../model/Validation.model";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fname:string;
  lname:string;
  mail:string;
  exist:boolean;
  password:string;
  bio:string;
  img:string;
  global:Globals;
  confPassword:string;
  userService:UserService;
  router:Router;


  constructor(serv:UserService,g:Globals,r:Router) {
    this.router=r;
    this.global=g;
    this.userService=serv;
  };

  register(){
    this.userService.getUserExistence(this.mail)
      .then(data => {
        this.exist = data ;
      }).catch(err => {
      console.log("Probleme de getUserExistence");
    });

    if(this.password!=this.confPassword){
      alert("your password doesn't match with your confirmation!");
    }
    else if(this.exist==true){
      alert("this e-mail already exists!");
    }
    else{
      this.img = (<HTMLParagraphElement>document.getElementById("url")).innerHTML;
      console.log(this.img);
      var hash = bcrypt.hashSync(this.password, 10);

      let user=new User(this.fname,this.lname,this.mail,hash,this.bio,this.img);
      var params:string;
      params="http://localhost:8080/user/add";
      this.userService.registerService(params,user);
      this.router.navigateByUrl("/page-login");
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

