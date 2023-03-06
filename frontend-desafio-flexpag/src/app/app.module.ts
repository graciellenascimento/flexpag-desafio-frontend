import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleDataComponent } from './views/vehicle-data/vehicle-data.component';
import { FormsModule } from '@angular/forms';
import { VehicleInputPriceComponent } from './views/vehicle-input-price/vehicle-input-price.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDataComponent,
    VehicleInputPriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VehicleDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
