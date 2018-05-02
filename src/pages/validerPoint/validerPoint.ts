import { Component } from '@angular/core';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";
import {Category} from "../../model/Category.model";
import {Globals} from "../../globalVariable/globals";
import {User} from "../../model/user.model";

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage {
  exist:PointOfInterest;
  pointAValider: boolean;
  poi:PointOfInterest;
  cate: Category;
  poiService:POIService;
  globals:Globals;
  categorie:string;

  constructor(serv:POIService,g:Globals) {
    this.poiService = serv;
    this.globals = g;
    let user=new User(this.globals.userExtended.firstName,this.globals.userExtended.lastName,this.globals.userExtended.email,this.globals.userExtended.hashPassword,this.globals.userExtended.biography,this.globals.userExtended.profilePicture);
    this.poiService.getPointToValidate(g.userExtended.token, user).then(data => {
      this.exist = data;
      this.pointAValider = true;
    }).catch(err => {
      console.log(err);
      this.pointAValider = false;
    });
};

    //this.poiService.getNextPointToValidate().subscribe(data => this.poi);
    //todo : A refaire entièrement


  vote_Non(){
    this.poiService.voteNon();
    this.poiService.getNextPointToValidate();
  }
  vote_Oui(){
    this.poiService.voteOui();
    this.poiService.getNextPointToValidate();
  }
}
