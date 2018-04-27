import { Component } from '@angular/core';
import {AppService} from "../../app/appService";
import {User} from "../../model/user.model";

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  modif:boolean;
  user:User;
  appService:AppService;
  prenom:string;
  nom:string;
  path:string;
  mail:string;
  pass1:string;
  pass2:string;
  pass3:string;
  description:string;
  constructor(serv:AppService) {
    this.appService=serv;
    this.user=new User("Eric","Cantona","MU@gmail.com","password","pas de description","../../assets/imgs/bb.jpg");
    this.description=this.user.bio;
    this.prenom=this.user.fname;
    this.nom=this.user.lname;
    this.mail=this.user.mail;
    this.path=this.user.pathPicture;
    this.modif=false;
  }
  modifier(){
    this.description=this.user.bio;
    this.prenom=this.user.fname;
    this.nom=this.user.lname;
    this.mail=this.user.mail;
    this.path=this.user.pathPicture;
    this.pass1=null;
    this.pass2=null;
    this.pass3=null;
    this.modif=!this.modif;
  }
  modifierBack(){
    this.user.fname=this.prenom;
    this.user.lname=this.nom;
    this.user.bio=this.description;
    this.user.mail=this.mail;
    if(this.pass1){
      if (this.pass1 == this.user.password) {
        if(this.pass2) {
          if (this.pass2 == this.pass3) {
            this.user.password = this.pass2;
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
    console.log(this.user.password);
    console.log(this.user.bio);
    //TODO implement image
    var url:string="lorem ipsum";
    this.appService.updateUser(url,this.user);
    this.modif=!this.modif;
  }
}
