import {PointOfInterest} from "./PointOfInterest.model"
import {User} from "./user.model";
import {Category} from "./Category.model";

export class TemporaryPointOfInterest extends PointOfInterest{
  endDate: Date;

  constructor(title:string, description: string, picture: ByteString, user: User, listCategory: Array<Category>, endDate: Date){
    super(title, description, picture, user, listCategory);
    this.endDate=endDate;
  }
}
