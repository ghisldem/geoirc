import { Component } from '@angular/core';
import { GeoIrcFB } from '../../api/services/geoirc-firebase';

@Component({
    selector: 'avm-mapapi',
    templateUrl: 'mapapi.html'
})

export class MapApiComp {

    coords: Array<[number, number]>; // coordonnées récupéré du service api et on le transmet par le html 

    message: string;

    constructor(private api: GeoIrcFB) {


    }
    ngOnInit() {
        let ListCoords = this.api.getCoords();
        let tab = []; //l'abréviation [] correspond à new array 
        for (const coord of ListCoords) {
            tab.push([coord.getLat(), coord.getLng()]); // on met les coordonnées dans l'array
        }
        setInterval(
            () => {
                this.coords[0][1] += 0.0002;
                this.coords[1][1] += 0.0001;
                this.coords[2][1] += 0.0004;
                console.log (this.coords);
            }, 2000
        );

        this.coords = tab; // on met la listes de coord dans coords
    }
}
