import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import { Globals} from "../../globalVariable/globals";
import { User} from "../../model/user.model";
import {Category} from "../../model/Category.model";
import{ POIService} from "../../service/POIService";
import {TemporaryPointOfInterest} from "../../model/TemporaryPointOfInterest.model";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'page-addPointInfos',
  templateUrl: 'addPointInfos.html'
})

export class AddPointInfosPage {
  titre:string;
  cat:Array<Category>;
  catSelect:Array<Category>;
  descr:string;
  tempo:boolean;
  date:Date;
  globals:Globals;
  poiService:POIService;

  constructor(g:Globals,serv:POIService){
  this.tempo=false;
  this.globals=g;
  this.poiService=serv;
  this.getCategories();
  }

  getCategories(){
    this.poiService.getAllCategory(this.globals.userExtended.token)
      .then(data=>{
        this.cat=data;
    });
  }

  addPoint(){

    let user=new User(this.globals.userExtended.firstName,this.globals.userExtended.lastName,this.globals.userExtended.email,this.globals.userExtended.hashPassword,this.globals.userExtended.biography,this.globals.userExtended.profilePicture);
    if(!this.tempo){
      console.log("Dans le if");
      let poi=new PointOfInterest(this.titre,this.descr,this.globals.photoTaken,user,this.catSelect,this.globals.photoTakenLat,this.globals.photoTakenLon);
      this.poiService.addPoint("http://localhost:8080/poi/add",poi,this.globals.userExtended.token);
    }
    else{
      let poi=new TemporaryPointOfInterest(this.titre,this.descr,this.globals.photoTaken,user,this.catSelect,this.globals.photoTakenLat,this.globals.photoTakenLon,this.date);
      this.poiService.addPointTempo("http://localhost:8080/poi/addTemporary",poi, this.globals.userExtended.token);
    }
  }
}
