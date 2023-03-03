import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DadosVeiculoComponent } from './dados-veiculo/dados-veiculo.component';
import { ValorVendaComponent } from './valor-venda/valor-venda.component';
import { ResultadoValorComponent } from './resultado-valor/resultado-valor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DadosVeiculoComponent,
    ValorVendaComponent,
    ResultadoValorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
