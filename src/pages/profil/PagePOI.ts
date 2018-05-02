import {Component} from "@angular/core";
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {POIService} from "../../service/POIService";

@Component({
  selector: 'pagePOI',
  templateUrl: 'PagePOI.html',
})

export class PagePOI {

  poiService : POIService;
  poiArray : Array<PointOfInterest>;

  constructor(poiS:POIService){
    this.poiService=poiS;
  }
}
