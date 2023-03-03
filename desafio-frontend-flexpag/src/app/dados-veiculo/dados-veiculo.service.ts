import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { VeiculoMarca } from './dados-veiculo-tipagem';

@Injectable({
  providedIn: 'root'
})
export class DadosVeiculoService {

  private readonly MarcasCarro = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'  //Fazer Http Request para marcas de carro

  constructor(private http: HttpClient) { }

  listaCarros() {
    return this.http.get<VeiculoMarca[]>(this.MarcasCarro)
    .pipe(
      tap(console.log)
    )
  }
}
