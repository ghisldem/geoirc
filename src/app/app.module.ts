import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


/*Modules*/
import { MapApiComp } from '../modules/mapapi/component/mapapi';//import du module map
/*libs*/
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; //import d'un module pour communiquer avec les cartes

/* plugin cordova*/
import { Geolocation } from '@ionic-native/geolocation';


import {AngularFireModule} from 'angularfire2';
import {fbconfig} from '../config/firebase.config';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { GeoIrcFB } from '../modules/api/services/geoirc-firebase';
import { MapApiModule } from '../modules/mapapi/mapapi.module';


 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LeafletModule.forRoot(), //import du module leaflet
    AngularFireModule.initializeApp(fbconfig),
    AngularFirestoreModule,
    MapApiModule //import du module mapapi
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    GeoIrcFB,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
