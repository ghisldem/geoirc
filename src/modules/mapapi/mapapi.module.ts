
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LeafletModule } from '@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module';
import { GeoIrcApiModule } from '../api/api.module';
import { MapApiComp } from './component/mapapi';
import { MapModule } from '../map/map.module';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    MapApiComp
  ],
  imports: [
    MapModule,
    GeoIrcApiModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [
    MapApiComp
  ]

})
export class MapApiModule { }
