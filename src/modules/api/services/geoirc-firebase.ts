import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../lib/user';
import { Coord } from '../lib/coord';
import { Message } from '../lib/messages';

// notation injectable veut dire qu'il peut être injecté à l'intérieur de ce service
@Injectable()
export class GeoIrcFB {

    constructor(private db: AngularFirestore) {
    }
    getUsers(): User[] {
        return [];
    };
    getUserCoords(user: User): Coord[] {

        return [];
    };
    getCoords(): Coord[] {
        // requête vers firebase pour récupérer les dernières 
        //coordonnées puis transformer les valeurs en tableau de coordeonnées

        let coords = [
            new Coord(50.635178,2.981689),
            new Coord(50.620412, 3.03693),
            new Coord(50.630746, 3.051229)
        ];

        return coords;
    };
    getUserMessages(user: User): Message[] {

        return [];
    };
    getMessages(): Message[] {

        return [];
    };
    postCoords(coord: Coord) {

    };
    postMessage(message: Message) {

    };
}