import { Component, ViewChild, ElementRef } from '@angular/core';
//import {Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() {// param constructeur: public geolocation: Geolocation

  }

  public ngAfterViewInit()
  {
    this.loadMap();

  }

  loadMap(){

    //this.geolocation.getCurrentPosition().then((position) => {

      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //let mapOptions = {
      //  center: latLng,
        //zoom: 15,
        //mapTypeId: google.maps.MapTypeId.ROADMAP
      //};

      this.map = new google.maps.Map(this.mapElement.nativeElement);

    //  var marker = new google.maps.Marker({
      //  position: latLng,
        //map: this.map,
        //title: "Hello World!"
      //});


   // }, (err) => {
     // console.log(err);
    //});

  }

}

