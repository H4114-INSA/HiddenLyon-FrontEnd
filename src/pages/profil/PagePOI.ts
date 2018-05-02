import {Component} from "@angular/core";
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";
import {User} from "../../model/user.model";
import {Globals} from "../../globalVariable/globals";

@Component({
  selector: 'pagePOI',
  templateUrl: 'PagePOI.html',
})

export class PagePOI {

  poiService : POIService;
  poiArray : Array<PointOfInterest>=[];
  global:Globals;

  constructor(poiS:POIService,g:Globals){
    this.poiService=poiS;
    this.global=g;
    this.getUserPOI();
  }
  getUserPOI(){
    var url:string="http://localhost:8080/poi/getUserPoi?mailUser="+this.global.userExtended.email;
    this.poiService.getUserValidatedPoi(url,this.global.userExtended.token).then(data => {
      this.poiArray = data;
    }).catch(err =>{
    });
  }
}

