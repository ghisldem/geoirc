
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MapComponent } from './components/map/map';
import { LeafletModule } from '@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module';
import { FormsModule } from '@angular/forms';
import { ChangeColor } from './directives/changeColor';


@NgModule({
  declarations: [
    MapComponent,
    ChangeColor
  ],
  imports: [
    LeafletModule,
    FormsModule
  ],
  providers: [

  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
