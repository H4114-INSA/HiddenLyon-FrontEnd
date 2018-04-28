import { Component } from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../model/user.model";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  modif:boolean;
  user:User;
  userService:UserService;
  prenom:string;
  nom:string;
  path:string;
  mail:string;
  pass1:string;
  pass2:string;
  pass3:string;
  description:string;
  page1:HomePage;
  page2:RegisterPage;
  constructor(serv:UserService) {
    this.userService=serv;
    //Todo get details
    this.user=new User("Eric","Cantona","MU@gmail.com","password","pas de description","../../assets/imgs/bb.jpg");
    this.description=this.user.biography;
    this.prenom=this.user.firstName;
    this.nom=this.user.lastName;
    this.mail=this.user.email;
    this.path=this.user.pathToProfilePicture;
    this.modif=false;
  }
  cancel(){
    this.description=this.user.biography;
    this.prenom=this.user.firstName;
    this.nom=this.user.lastName;
    this.mail=this.user.email;
    this.path=this.user.pathToProfilePicture;
    this.pass1=null;
    this.pass2=null;
    this.pass3=null;
    this.modif=!this.modif;
  }
  modifierBack(){
    this.user.firstName=this.prenom;
    this.user.lastName=this.nom;
    this.user.biography=this.description;
    this.user.email=this.mail;
    if(this.pass1){
      if (this.pass1 == this.user.hashPassword) {
        if(this.pass2) {
          if (this.pass2 == this.pass3) {
            this.user.hashPassword = this.pass2;
          }
          else {
            console.log("new password doesn't match its confirmation!");
            return;
          }
        }
        else{console.log("enter a new password!");return;}
      }
      else{
        console.log("bad actual password!");
        return;}
    }
    //TODO implement image,url
    var url:string="lorem ipsum";
    this.userService.updateUser(url,this.user);
    this.modif=!this.modif;
  }
  modifier(){
    this.modif=!this.modif;
  }
}
