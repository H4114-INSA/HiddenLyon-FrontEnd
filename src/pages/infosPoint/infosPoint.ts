import {Component} from '@angular/core';
import {ViewController, IonicPage, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-infosPoint',
  templateUrl: 'infosPoint.html'
})
export class InfosPointPage {

  constructor(public viewCtrl: ViewController, params: NavParams) {
    console.log('title', params.get('title'));
    //document.getElementById("titlePOI").innerText=params.get('title');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
