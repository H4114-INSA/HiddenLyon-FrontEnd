import { Component } from '@angular/core';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";
import {Category} from "../../model/Category.model";

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage {
  poi:PointOfInterest;
  cate: Category;
  poiService:POIService;
  categorie:string;
  constructor(serv:POIService) {
    this.poiService=serv;
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
