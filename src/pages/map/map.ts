import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation';
import {POIService} from "../../service/POIService";
import {PointOfInterest} from "../../model/PointOfInterest.model";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  points:Array<PointOfInterest>;
  poiService:POIService;

  constructor(public geolocation: Geolocation, serv: POIService) {
    this.poiService=serv;
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
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      /*var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: "Hello World!"
      });*/
      
       //Affichage des marqueurs
        let latLng1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let latLng2 = new google.maps.LatLng(position.coords.latitude+0.01, position.coords.longitude+0.01);
        let coord: Array<google.maps.LatLng> =[];
        coord[0] = latLng1;
        coord[1] = latLng2;
        
        this.ajouterMarqueurs(coord);
        
        this.poiService.getPOI().then(data => {
        this.points = data;
        }).catch(err =>{
        });


    }, (err) => {
      console.log(err);
    });

  }
  
  traitementPoints() {
    for(i=0;i<this.points.length;i++){
            let coords: Array<google.maps.LatLng> =[];
            let latLng = new google.maps.LatLng(this.points[i].latitude, this.points[i].longitude);
            coords[i] = latLng;
        }
        this.ajouterMarqueurs(coords);
        }
  
  markerOnClick() {
    console.log("marqueur");
  }

}

  
  

