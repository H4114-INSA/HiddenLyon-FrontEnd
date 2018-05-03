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

  rate(rate:number){
    console.log(rate);
    var stars = document.getElementsByClassName('rate');
    var i;
    for(i =0; i < stars.length; i++){
      if (i < rate){
        stars[stars.length - i -1].className = 'rate checked '+(i+1);
      }else{
        stars[stars.length - i -1].className = 'rate '+(i+1);
      }

    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
