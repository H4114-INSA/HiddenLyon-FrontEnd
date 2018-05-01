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
      var params:string;
      params="http://localhost:8080/user/add";

      let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.img); // todo hash
      console.log(user);
      this.userService.registerService(params,user);
    } else{
      alert("your password doesn't match with your confirmation!");
    }
  }

  getImage(event){

   var reader = new FileReader();
   reader.onload = function (e : any) {

       //console.log(e.target.result);
       this.img=e.target.result;
       //console.log(this.img);
       document.getElementById("avatar").src = this.img;
       let user=new User(this.fname,this.lname,this.mail,this.password,this.bio,this.img);
       console.log(user);

   };
   reader.readAsDataURL(document.getElementById("img").files[0]);
 }

}

