
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GeoIrcFB } from './services/geoirc-firebase';

@NgModule({
    declarations: [

    ],
    imports: [

    ],
    providers: [
        GeoIrcFB
    ],
    exports: [

    ]
    
})
export class GeoIrcApiModule { }