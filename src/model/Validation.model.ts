import {User} from "./user.model";
import {PointOfInterest} from "./PointOfInterest.model";

export class Validation{
  IdValidation: number;
  validationNote: boolean;
  validationDate: Date;
  user: User;
  point: PointOfInterest;

  constructor(validationNote: boolean, user: User, point: PointOfInterest) {
    this.validationNote = validationNote;
    this.user = user;
    this.point = point;
  }
}
