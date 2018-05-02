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

  ajouterMarqueurs(coords: Array<google.maps.LatLng>): void {
        var i:number;

        for(i=0;i<coords.length;i++) {
            var marker = new google.maps.Marker({
            position: coords[i],
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            google.maps.event.addDomListener(marker, 'click', function() {
                console.log("marqueur");

            });
        }
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

  markerOnClick() {
    console.log("marqueur");
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

