import { Component } from '@angular/core';
import {UserService} from "../../service/UserService";
import {Globals} from "../../globalVariable/globals";
import{Router} from "@angular/router";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  image: String;
  usermail:string;
  password:string;
  userService:UserService;
  global : Globals;
  router:Router;

  constructor(serv: UserService, g: Globals,r:Router) {
    this.router=r;
    this.userService=serv;
    this.global=g;
    this.image = '../assets/imgs/search.png';
  }

  login(){
    var params : string = "http://localhost:8080/user/authentication";
    var query: string = "?email="+this.usermail+"&password="+this.password;

    this.userService.loginService(params+query).then(data => {
      this.global.userExtended = data;
      this.global.userExtended.token = btoa(this.usermail+":"+data.hashPassword);
      this.router.navigateByUrl("/page-home");
    }).catch(err =>{

    });
  }

}
