export class Coord {

    private lat: number;
    private lng: number;

    // "?" paramètre optionnel
    constructor(lat?: number, lng?: number) {
        this.lat = lat;
        this.lng = lng;
    }

    getLat() {
        return this.lat;
    }

    setLat(lat: number) {
        this.lat = lat;
    }
    getLng() {
        return this.lng;
    }
    setLng(lng: number) {
        this.lng = lng;
    }

}