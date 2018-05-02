import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation';
import {POIService} from "../../service/POIService";
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {Globals} from "../../globalVariable/globals";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  points:Array<PointOfInterest>;
  markers:Array<google.maps.Marker>;
  poiService:POIService;
  globals: Globals;
  categoriesC: Array<string>;

  constructor(public geolocation: Geolocation, serv: POIService, g: Globals) {
    this.poiService=serv;
    this.globals=g;
    this.markers= new Array<google.maps.Marker>();
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
            this.markers.push(marker);
        }
   }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.globals.photoTakenLat=position.coords.latitude;
      this.globals.photoTakenLon=position.coords.longitude;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

       //Affichage des marqueurs
        let latLng1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let latLng2 = new google.maps.LatLng(position.coords.latitude+0.01, position.coords.longitude+0.01);
        let coord: Array<google.maps.LatLng> =[];
        coord[0] = latLng1;
        coord[1] = latLng2;

        this.ajouterMarqueurs(coord);

        this.poiService.getPOI(this.globals.userExtended.token).then(data => {
        this.points = data;
        this.traitementPoints();

        }).catch(err =>{
        });
    }, (err) => {
      console.log(err);
    });

  }

  traitementPoints() {
    let coords: Array<google.maps.LatLng> =[];
    for(var i=0;i<this.points.length;i++){

            let latLng = new google.maps.LatLng(this.points[i].latitude, this.points[i].longitude);
            coords[i] = latLng;
        }
        this.ajouterMarqueurs(coords);
    }


    clearMarkers() {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
        this.markers =[];
      }

    setMarkers() {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(this.map);
        }
      }

    filtrerCategorie() {
        this.clearMarkers();
        if(this.categoriesC.length==0) {
            this.poiService.getPOI(this.globals.userExtended.token).then(data => {
            this.points = data;
            this.traitementPoints();

            }).catch(err =>{
                });
        }
        else {
            /*this.poiService.getPOICategorie(this.globals.userExtended.token, this.categoriesC).then(data => {
            this.points = data;
            this.traitementPoints();

            }).catch(err => {
                });*/

        }
    }

    filtrerRequete(q:string) {
        this.clearMarkers();
        if(q.length>0){
            /*this.poiService.getPOIRequete(this.globals.userExtended.token, q).then(data => {
            this.points=data;
            this.traitementPoints();

            }).catch(err => {
                });*/
        }
        else {
            this.poiService.getPOI(this.globals.userExtended.token).then(data => {
            this.points = data;
            this.traitementPoints();

            }).catch(err =>{
                });
        }
    }

}




