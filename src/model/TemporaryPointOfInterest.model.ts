import {PointOfInterest} from "./PointOfInterest.model"
import {User} from "./user.model";
import {Category} from "./Category.model";

export class TemporaryPointOfInterest extends PointOfInterest{
  endDate: Date;

  constructor(title:string, description: string, picture: ByteString, user: User, listCategory: Array<Category>,lon:number,lat:number, endDate: Date){
    super(title, description, picture, user, listCategory,lon,lat);
    this.endDate=endDate;
  }
}
