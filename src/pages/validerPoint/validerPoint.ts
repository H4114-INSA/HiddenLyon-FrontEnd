import { Component } from '@angular/core';

@Component({
  selector: 'page-validerPoint',
  templateUrl: 'validerPoint.html'
})
export class ValiderPointPage {
  cat1:boolean;
  cat2:boolean;
  cat3:boolean;
  cat4:boolean;
  cat5:boolean;
  cat6:boolean;
  description:string;
  categorie:string;
  image:string;
  constructor() {
    this.cat1=true;
    this.cat2=false;
    this.cat3=true;
    this.cat4=true;
    this.cat5=true;
    this.cat6=false;
    this.image="../../assets/imgs/bb.jpg";
    this.description="Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam viri et inopes quam opulenti et calamitosi quam ii qui putentur beati.";
    this.categorie="";
    if(this.cat1){
      this.categorie+="#catégorie1";
    }
    if(this.cat2){
      this.categorie+="#catégorie2";
    }
    if(this.cat3){
      this.categorie+="#catégorie3";
    }
    if(this.cat4){
      this.categorie+="#catégorie4";
    }
    if(this.cat5){
      this.categorie+="#catégorie5";
    }
    if(this.cat6){
      this.categorie+="#catégorie6";
    }
  }

}
