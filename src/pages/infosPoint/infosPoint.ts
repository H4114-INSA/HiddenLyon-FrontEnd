import {Component} from '@angular/core';
import {ViewController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-infosPoint',
  templateUrl: 'infosPoint.html'
})
export class InfosPointPage {

  constructor(public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
