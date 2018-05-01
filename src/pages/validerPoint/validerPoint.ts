import { Component } from '@angular/core';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";
import {Category} from "../../model/Category.model";
import {Globals} from "../../globalVariable/globals";

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage {
  poi:PointOfInterest;
  cate: Category;
  poiService:POIService;
  globals:Globals;
  categorie:string;
  constructor(serv:POIService,g:Globals) {
    this.poiService=serv;
    this.globals=g;
    //this.poiService.getNextPointToValidate().subscribe(data => this.poi);
    //todo : A refaire entièrement

  }

  vote_Non(){
    this.poiService.voteNon();
    this.poiService.getNextPointToValidate();
  }
  vote_Oui(){
    this.poiService.voteOui();
    this.poiService.getNextPointToValidate();
  }
}
