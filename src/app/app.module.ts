import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleTypeComponent } from './components/vehicle-type/vehicle-type.component';
import { VehicleSubtypeComponent } from './components/vehicle-subtype/vehicle-subtype.component';
import { VehicleImageComponent } from './components/vehicle-image/vehicle-image.component';
import { VehicleLicencePlateComponent } from './components/vehicle-licence-plate/vehicle-licence-plate.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VehicleTypeComponent,
    VehicleSubtypeComponent,
    VehicleImageComponent,
    VehicleLicencePlateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
