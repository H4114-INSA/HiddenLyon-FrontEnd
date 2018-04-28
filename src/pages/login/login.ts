import { Component } from '@angular/core';
import {UserService} from "../../service/UserService";
import {Globals} from "../../globalVariable/globals";


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

  constructor(serv: UserService, g: Globals) {
    this.userService=serv;
    this.global=g;
    this.image = '../assets/imgs/search.png';
  }

  login(){
    var params : string;
    params = "http://localhost:8080/user/authentication";
    var query: string = "?email="+this.usermail+"&password="+this.password;
    var token :string = btoa(this.usermail + ":" + this.password);

    this.userService.loginService(params+query).then(data => {
      this.global.userExtended = data;
      this.global.userExtended.token = token;
    });
  }

}
