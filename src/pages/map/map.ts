import { Component, ViewChild, ElementRef } from '@angular/core';
import {Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular';
import {POIService} from "../../service/POIService";
import {PointOfInterest} from "../../model/PointOfInterest.model";
import {Globals} from "../../globalVariable/globals";
import {Category} from "../../model/Category.model";

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  points: Array<PointOfInterest>;
  markers: Array<google.maps.Marker>;
  parcours:Array<google.maps.LatLng>;
  poiService: POIService;
  globals: Globals;
  categoriesC: Array<string>;
  direction: google.maps.DirectionsRenderer;
  cat: Array<Category>;
  myInput: string;

  constructor(public geolocation: Geolocation, serv: POIService, g: Globals, public modalCtrl: ModalController) {
    this.poiService = serv;
    this.globals = g;
    this.markers = new Array<google.maps.Marker>();
    this.parcours= new Array<google.maps.LatLng>();
    this.getCategories();
  }

  public ngAfterViewInit() {
    this.loadMap();
  }

  getCategories() {
    this.poiService.getAllCategory(this.globals.userExtended.token)
      .then(data => {
        this.cat = data;
      });
  }

  ajouterMarqueurs(): void {
        var i:number;
        var parcours = this.parcours;
        var direction = this.direction;
        var map = this.map;
        var modalCtrl = this.modalCtrl;

        for(i=0;i<this.points.length;i++) {
            let latLng = new google.maps.LatLng(this.points[i].latitude, this.points[i].longitude);
            var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });

            const myModal =  modalCtrl.create('InfosPointPage', {point: this.points[i] });
            marker.addListener('click', function() {
              myModal.present();
            });

            google.maps.event.addDomListener(marker, 'dblclick', function(e) {
                marker.selected = !marker.selected;

                let latLng = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());
                parcours.push(latLng);

                if(parcours.length >= 2) {
                    var origin = parcours[0];
                    var destination = parcours[parcours.length-1];
                    var waypoints = [];
                    for(var i =1; i<parcours.length-1;i++) {
                        waypoints.push({
                            location: parcours[i],
                        });
                    }
                     if(origin && destination){
                        var request = {
                            origin      : origin,
                            destination : destination,
                            waypoints : waypoints,
                            travelMode  : google.maps.DirectionsTravelMode.WALKING // Type de transport
                        }

                        var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
                        directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
                            if(status == google.maps.DirectionsStatus.OK){
                                direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
                            }
                        });
                    }
                    direction.setMap(map);
                }

            });
            this.markers.push(marker);
        }
   }


  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.globals.photoTakenLat = position.coords.latitude;
      this.globals.photoTakenLon = position.coords.longitude;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.direction = new google.maps.DirectionsRenderer({
            map   : this.map,
        });

       //Affichage des marqueurs
        let latLng1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let coord: Array<google.maps.LatLng> =[];
        coord[0] = latLng1;

        this.marquerPositionGeo(coord);

      this.poiService.getPOI(this.globals.userExtended.token).then(data => {
        this.points = data;
        this.ajouterMarqueurs();
      }).catch(err => {
      });
    }, (err) => {
      console.log(err);
    });

  }

  marquerPositionGeo(coords: Array<google.maps.LatLng>): void {
    var i: number;
    for (i = 0; i < coords.length; i++) {
      var marker = new google.maps.Marker({
        position: coords[i],
        map: this.map,
        icon: 'http://maps.google.com/mapfiles/ms/micons/red.png'
      });
    }
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
    if (this.categoriesC.length == 0) {
      this.poiService.getPOI(this.globals.userExtended.token).then(data => {
        this.points = data;
        this.ajouterMarqueurs();

      }).catch(err => {
      });
    }
    else {
      this.poiService.getPOICategorie(this.globals.userExtended.token, this.categoriesC).then(data => {
        this.points = data;
        this.ajouterMarqueurs();

      }).catch(err => {
      });

    }
  }

  filtrerRequete() {
    console.log("Je suis entre dans le filtrer requete");
    this.clearMarkers();
    if (this.myInput.length > 0) {
      this.poiService.getPOIRequete(this.globals.userExtended.token, this.myInput).then(data => {
        this.points = data;
        this.ajouterMarqueurs();
      }).catch(err => {
      });
    }
    else {
      this.poiService.getPOI(this.globals.userExtended.token).then(data => {
        this.points = data;
        this.ajouterMarqueurs();
      }).catch(err => {
      });
    }
  }

    cancel() {
        this.poiService.getPOI(this.globals.userExtended.token).then(data => {
            this.points = data;
            this.ajouterMarqueurs();

            }).catch(err =>{
                });
    }

    resetParcours() {
        this.direction.setMap(null);
        this.parcours.length = 0;
    }

}




