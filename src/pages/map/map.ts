import { Component } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";
import { NavController } from 'ionic-angular';
import { DetailPage} from "../details/details";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

<<<<<<< HEAD
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(  public navCtrl: NavController) {

  }

  details(){
    this.navCtrl.push(DetailPage);
  }

}











=======
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  points: Array<PointOfInterest>;
  markers: Array<google.maps.Marker>;
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
    var modalCtrl = this.modalCtrl;
    var i: number;


    for (i = 0; i < this.points.length; i++) {
      let latLng = new google.maps.LatLng(this.points[i].latitude, this.points[i].longitude);
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });
      var title = this.points[i].title;
      var description = this.points[i].description;
      var picture = this.points[i].picture;
      var categories = this.points[i].categories;

      const myModal = modalCtrl.create('InfosPointPage', {
        title: title,
        description: description,
        picture: picture,
        categories: categories
      });
      marker.addListener('click', function () {
        myModal.present();
      });
      this.markers.push(marker);
    }
  }

  loadMap() {

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

      //Affichage des marqueurs
      let latLng1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let coord: Array<google.maps.LatLng> = [];
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
>>>>>>> 1f4711547b154b922431c03a90f6ce668f8db9c7





