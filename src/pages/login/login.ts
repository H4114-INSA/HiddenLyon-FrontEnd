import { Component } from '@angular/core';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  image: String;
  usermail:string;
  password:string;
  constructor() {
    this.image = '../assets/imgs/search.png';
  }

}
