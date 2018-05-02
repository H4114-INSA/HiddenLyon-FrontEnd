import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public geolocation: Geolocation, private toastCtrl: ToastController) {

  }

  public ngAfterViewInit()
  {
    this.loadMap();

  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: "You are here!"
      });


    }, (err) => {
      console.log(err);
    });

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}

