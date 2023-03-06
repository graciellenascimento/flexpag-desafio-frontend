import { Component, Input } from '@angular/core';
// import { findIndex, Observable } from 'rxjs';
import { VehicleDataService } from 'src/app/controller/vehicle-data.service';
import { VehicleData, VehicleModel, VehicleYear } from 'src/app/models/vehicle-data';
import { VehiclePrice } from 'src/app/models/vehicle-price';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent {

  vehicleType!: string;
  itemCategories!: string;
  truckTypeValue!: string;
  motoTypeValue!: string;
  carYearValue!: string
  motoYearValue!: string
  truckYearValue!: string
  carModelValue!: number
  motoModelValue!: number;
  truckModelValue!: number;
  getRequestResponse!: any
  getModels!: any;
  carType!: VehicleData[];
  motoType!: VehicleData[]; 
  truckType!: VehicleData[];
  modelList!:  VehicleModel[]
  yearList!:  VehicleYear[]
  carPriceFipe!: VehiclePrice[]
  motoPriceFipe!: VehiclePrice[];
  truckPriceFipe!: VehiclePrice[];
 
  constructor(private service: VehicleDataService) {}

  ngOnInit(): void {
    this.vehicleType = "1"; //define o valor default como 1, ou seja, carro
    this.service.carsList().subscribe(data => this.carType = data); //Chamando serviço para listagem de marcas de carro
    this.service.motoList().subscribe(data => this.motoType = data); //Chamando serviço para listagem de marcas de moto
    this.service.truckList().subscribe(data => this.truckType = data); //Chamando serviço para listagem de marcas de moto
    this.itemCategories = "0";
    this.carModelValue = 1;
    this.motoModelValue = 1;
    this.truckModelValue = 1;
    this.carYearValue = "1"
    this.motoYearValue = "1"
    this.truckYearValue = "1"

  }

  listCarModel(codigo: any) {    
    this.service.listCarModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }

  listMotoModel(codigo: any) {    
    this.service.listMotoModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }

  listTruckModel(codigo: any) {    
    this.service.listTruckModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }

  listCarYear(codigo: string, codigomodelo: number) {    
    this.service.listCarYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }
  listMotoYear(codigo: string, codigomodelo: number) {    
    this.service.listMotoYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }
  listTruckYear(codigo: string, codigomodelo: number) {    
    this.service.listTruckYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }

  carFIPEPrice(codigo: string, codigomodelo: number, codigoano: string) {    
    this.service.carPriceFIPE(codigo, codigomodelo, codigoano).subscribe( response => {
      this.carPriceFipe = response;
      this.getRequestResponse = this.carPriceFipe
    });
  }

  motoFIPEPrice(codigo: string, codigomodelo: number, codigoano: string) {    
    this.service.motoPriceFIPE(codigo, codigomodelo, codigoano).subscribe( response => {
      this.motoPriceFipe = response;
      this.getRequestResponse = this.motoPriceFipe
    });
  }

  truckFIPEPrice(codigo: string, codigomodelo: number, codigoano: string) {    
    this.service.truckPriceFIPE(codigo, codigomodelo, codigoano).subscribe( response => {
      this.truckPriceFipe = response;
      this.getRequestResponse = this.truckPriceFipe
    });
  }

  

}
