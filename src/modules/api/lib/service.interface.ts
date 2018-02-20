import { Coord } from "./coord";
import { User } from "./user";
import { Message } from "./messages";


interface GeoIrcService {

    getUsers() : User [];
    getUserCoords(user:User) : Coord [] ;
    getCoords() : Coord [];
    getUserMessages(user:User) : Message[] ;
    getMessages() : Message[];
    postCoords(coord :  Coord);
    postMessage(message : Message);

}