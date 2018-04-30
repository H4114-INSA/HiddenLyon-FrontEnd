import {User} from "./user.model";
import {PointOfInterest} from "./PointOfInterest.model";

export class OriginalityEvaluation{
  IdEvaluation: number;
  note: number;
  evaluationDate: Date;
  user: User;
  point: PointOfInterest;
  
  constructor(note: number, user: User, point: PointOfInterest) {
    this.note = note;
    this.user = user;
    this.point = point;
  }
}
