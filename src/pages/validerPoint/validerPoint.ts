import { Component } from '@angular/core';
import {POI} from "../../model/POI.model";
import {POIService} from "../../service/POIService";

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage {
  poi:POI;
  poiService:POIService;
  categorie:string;
  constructor(serv:POIService) {
    this.poiService=serv;
    //this.poiService.getNextPointToValidate().subscribe(data => this.poi);
    //todo
    this.poi=new POI("big ben","lorem ipsum","../../assets/imgs/bb.jpg",true,false,true,false,true,true);
    this.categorie="";
    if(this.poi.cat1){
      this.categorie+="#catégorie1";
    }
    if(this.poi.cat2){
      this.categorie+="#catégorie2";
    }
    if(this.poi.cat3){
      this.categorie+="#catégorie3";
    }
    if(this.poi.cat4){
      this.categorie+="#catégorie4";
    }
    if(this.poi.cat5){
      this.categorie+="#catégorie5";
    }
    if(this.poi.cat6){
      this.categorie+="#catégorie6";
    }
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
