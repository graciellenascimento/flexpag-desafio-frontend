import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { VehicleData } from '../models/vehicle-data';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  private readonly base_url = 'https://parallelum.com.br/fipe/api/v1/'

  constructor(private http: HttpClient) { } //injeta o HttpClient

  carsList() {
    return this.http.get<VehicleData[]>(this.base_url + 'carros/marcas')
      .pipe(
        tap(console.log)
      )
  }

  motoList() {
    return this.http.get<VehicleData[]>(this.base_url + 'motos/marcas')
      .pipe(
        tap(console.log)
      )
  }

  truckList() {
    return this.http.get<VehicleData[]>(this.base_url + 'caminhoes/marcas')
      .pipe(
        tap(console.log)
      )
  }

  listCarModels(codigo: string): Observable<any> {
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  listMotoModels(codigo: string): Observable<any> {
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  listTruckModels(codigo: string): Observable<any> {
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  listCarYears(codigo: string, codigomodelo: number): Observable<any> {
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  listMotoYears(codigo: string, codigomodelo: number): Observable<any> {
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  listTruckYears(codigo: string, codigomodelo: number): Observable<any> {
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos/${codigomodelo}/anos`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  carPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}carros/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  motoPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}motos/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }

  truckPriceFIPE(codigo: string, codigomodelo: number, codigoano: string): Observable<any> {
    return this.http.get(`${this.base_url}caminhoes/marcas/${codigo}/modelos/${codigomodelo}/anos/${codigoano}`).pipe(
      map((response: any) => Object.values(response)),
      tap(console.log)
    );
  }
}
