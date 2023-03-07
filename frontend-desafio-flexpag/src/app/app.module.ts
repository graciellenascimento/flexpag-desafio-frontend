import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleDataComponent } from './views/vehicle-data/vehicle-data.component';
import { FormsModule } from '@angular/forms';
import { VehicleInputPriceComponent } from './views/vehicle-input-price/vehicle-input-price.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDataComponent,
    VehicleInputPriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
