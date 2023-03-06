import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { VehicleData } from '../models/vehicle-data';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  //url base
  private readonly base_url = 'https://parallelum.com.br/fipe/api/v1/' 

  constructor(private http: HttpClient) { } //injeta o HttpClient

  //listagem dos carros
  carsList() { 
    return this.http.get<VehicleData[]>(this.base_url + 'carros/marcas')
      .pipe(
        tap(console.log)
      )
  }

  //listagem das motos
  motoList() {  
    return this.http.get<VehicleData[]>(this.base_url + 'motos/marcas')
      .pipe(
        tap(console.log)
      )
  }

  //listagem dos caminhões
  truckList() {  
    return this.http.get<VehicleData[]>(this.base_url + 'caminhoes/marcas')
      .pipe(
        tap(console.log)
      )
  }

  //listagem dos modelos dos carros
  listCarModels(codigo: string): Observable<any> {  
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //listagem dos modelos das motos
  listMotoModels(codigo: string): Observable<any> { 
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //listagem dos modelos dos caminhões
  listTruckModels(codigo: string): Observable<any> { 
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //listagem dos anos dos carros
  listCarYears(codigo: string, codigomodelo: number): Observable<any> { 
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //listagem dos anos das motos
  listMotoYears(codigo: string, codigomodelo: number): Observable<any> {
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //listagem dos anos dos caminhões
  listTruckYears(codigo: string, codigomodelo: number): Observable<any> { 
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)));
  }

  //dados dos carros de acordo com a tabela FIPE
  carPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)));
  }

  //dados das motos de acordo com a tabela FIPE
  motoPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)),);
  }

  //dados dos caminhões de acordo com a tabela FIPE
  truckPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)));
  }
}
