import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PointOfInterest} from "../../model/PointOfInterest.model";
import { Globals} from "../../globalVariable/globals";
import { User} from "../../model/user.model";
import {Category} from "../../model/Category.model";
import{ POIService} from "../../service/POIService";
import {TemporaryPointOfInterest} from "../../model/TemporaryPointOfInterest.model";

@Component({
  selector: 'page-addPointInfos',
  templateUrl: 'addPointInfos.html'
})
export class AddPointInfosPage {
  titre:string;
  cat:Array<string>;
  descr:string;
  tempo:boolean;
  date:Date;
  globals:Globals;
  poiService:POIService;
  constructor(g:Globals,serv:POIService){
  this.tempo=false;
  this.globals=g;
  this.poiService=serv;
  }

  addPoint(){
    let listCat:Array<Category>=[];
    var i:number=0;
    for(i;this.cat.length;i++){
      var c:Category=new Category(this.cat[i])
      listCat.push(c);
    }
    let user=new User(this.globals.userExtended.firstName,this.globals.userExtended.lastName,this.globals.userExtended.email,this.globals.userExtended.hashPassword,this.globals.userExtended.biography,this.globals.userExtended.profilePicture);
    if(!this.tempo){
    let poi=new PointOfInterest(this.titre,this.descr,this.globals.photoTaken,user,listCat,this.globals.photoTakenLat,this.globals.photoTakenLon);
    this.poiService.addPoint("/poi/add",poi);
    }
    else{
      let poi=new TemporaryPointOfInterest(this.titre,this.descr,this.globals.photoTaken,user,listCat,this.globals.photoTakenLat,this.globals.photoTakenLon,this.date);
      this.poiService.addPointTempo("/poi/add",poi);
    }
  }
}
