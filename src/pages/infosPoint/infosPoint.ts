import {Component} from '@angular/core';
import {ViewController, IonicPage, NavParams} from 'ionic-angular';
import {Category} from "../../model/Category.model";

@IonicPage()
@Component({
  selector: 'page-infosPoint',
  templateUrl: 'infosPoint.html'
})
export class InfosPointPage {
  title:string;
  description:string;
  picture:any;
  categories:Array<Category>;
  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.title=params.get('title');
    this.description=params.get('description');
    this.picture=params.get('picture');
    this.categories=params.get('categories');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
