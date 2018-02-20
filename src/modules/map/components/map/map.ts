import { Component } from '@angular/core';
import { latLng, LatLng, tileLayer, marker, icon, Marker, Map } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';
import { Input } from '@angular/core';


@Component({
  selector: 'map-comp',
  templateUrl: 'map.html'
})


export class MapComponent {

  name: number = 1;
  couleur = "red";
  map: Map;
  @Input() coords: Array<[number, number]>; // récupération des coordonnées par map api qui retransmet l'info du service api
  markers: Marker[] = [];

  // création d'un objet icon 'marker'
  markerIcon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/imgs/marker.png',
    })
  };

  // paramétrage de position du marker et de la carte, zoom...
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' }),
      marker([0, 0], this.markerIcon)
    ],
    zoom: 14,
    center: latLng(50.633333, 3.066667)
  };

  center = latLng(50.633333, 3.0666667) // on ajoute un attribut center qui permet de donner 
  //la valeur de position du marker, il est mis à jour dans le constructeur
  //on centre la carte sur le marker. les valeurs entrées sont entrées à titre indicatif

  constructor(private geo: Geolocation) {

    //définition des coordonnées, retourne nos coordonnées
    // demande de la position GPS
    this.geo.getCurrentPosition().then((resp) => {
      // resp est un objet contenant un sous-objet avec les coordonnées
      let coords = resp.coords;
      let newLatLng = new LatLng(coords.latitude, coords.longitude);
      //marker(newLatLng, this.markerIcon);

      //placement du marker sur la carte
      let mark: Marker = <Marker>this.options.layers[1];
      mark.setLatLng(newLatLng);

      //centrer le marker
      this.center = newLatLng;

    }).catch((error) => {
      console.log('Erreur de localisation', error);
    });

    setInterval(() => {
      this.name = Math.random();
    }, 2000)

  }


  unClick() {
    console.log(this.name);
  }

  setMap(map: Map) {
    console.log(map);
    this.map = map;

    this.setMarkers(this.coords);

    setInterval(
      () => {
        this.setMarkers(this.coords);
      }, 2000
    );

    //let mark = marker([50.633333, 3.066667], this.markerIcon);
    //mark.addTo(this.map);
  }


  truc(e) {

  }

  /*
  on recoit un tableau contenant une liste de coordonnées et on affiche les marqueurs
  */
  setMarkers(coords: Array<[number, number]>) {

    // si la carte n'existe pas on lance une erreur
    if (!this.map) {
      throw `ce n'est pas la peine d'ajouter un marker , 
      la carte n'existe pas`

    }
    
   // nous déplaçons les marqueurs à partir
   // d'une liste de coordonnées
   // s'il n'y a pas assez de marqueurs on en ajoute

   for (let i=0; i<coords.length ; i++) {
    let latLng = coords[i];

    if(this.markers[i]) {
      let mark = this.markers[i];
      mark.setLatLng(latLng);
    } else {
      let mark = marker(latLng, this.markerIcon);
      mark.addTo(this.map);
      this.markers.push(mark);
    }
    
  }

  }


  ngOnInit() {
  }

}
