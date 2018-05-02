import {Component, OnInit} from '@angular/core';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";
import {Category} from "../../model/Category.model";
import {Globals} from "../../globalVariable/globals";
import {User} from "../../model/user.model";
import {Validation} from "../../model/Validation.model";
import {UserExtended} from "../../model/userExtended.model";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage implements  OnInit{
  pointAValider: boolean;
  poi:PointOfInterest;
  cate: Category;
  poiService:POIService;
  globals:Globals;
  categorie:string;
  router : Router;

  constructor(serv:POIService,g:Globals, r:Router) {
    this.poiService = serv;
    this.globals = g;
    this.router=r;

    this.router.events.subscribe((e :any) => {
      if(e instanceof NavigationStart){
        this.initialiseInvites();
      }
    });
  };

  initialiseInvites(){
    let user=new User(this.globals.userExtended.firstName,this.globals.userExtended.lastName,this.globals.userExtended.email,this.globals.userExtended.hashPassword,this.globals.userExtended.biography,this.globals.userExtended.profilePicture);
    console.log(user);
    this.poiService.getPointToValidate(this.globals.userExtended.token, user)
      .then(data => {
        this.poi = data;
        this.pointAValider = true;
      }).catch(err => {
      console.log(err);
      this.pointAValider = false;
    });
  }

  ngOnInit(){
    let user=new User(this.globals.userExtended.firstName,this.globals.userExtended.lastName,this.globals.userExtended.email,this.globals.userExtended.hashPassword,this.globals.userExtended.biography,this.globals.userExtended.profilePicture);
    console.log(user);
    this.poiService.getPointToValidate(this.globals.userExtended.token, user)
      .then(data => {
        this.poi = data;
        this.pointAValider = true;
      }).catch(err => {
        console.log(err);
        this.pointAValider = false;
      });
  }



  vote_Non(){
    var userExtended : UserExtended = this.globals.userExtended;
    var user : User = new User(userExtended.firstName,userExtended.lastName,userExtended.email,userExtended.hashPassword, userExtended.biography,userExtended.profilePicture);
    var validation: Validation = new Validation(false,user,this.poi);
    this.poiService.vote(this.globals.userExtended.token,validation);
    console.log("AVANT SSAUT NAVIGATION");
    this.router.navigateByUrl("/page-validerPoint");
  }

  vote_Oui(){
    var userExtended : UserExtended = this.globals.userExtended;
    var user : User = new User(userExtended.firstName,userExtended.lastName,userExtended.email,userExtended.hashPassword, userExtended.biography,userExtended.profilePicture);
    var validation: Validation = new Validation(true,user,this.poi);
    this.poiService.vote(this.globals.userExtended.token,validation);
    console.log("AVANT SSAUT NAVIGATION");
    this.router.navigateByUrl("/page-validerPoint");
  }
}
