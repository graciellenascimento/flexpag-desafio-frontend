import { Component, Input } from '@angular/core';
import { findIndex, Observable } from 'rxjs';
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
  carType!: VehicleData[];
  motoType!: VehicleData[]; 
  truckType!: VehicleData[];
  itemCategories!: string;
  truckTypeValue!: string;
  motoTypeValue!: string;
  carModelValue!: number
  motoModelValue!: number;
  truckModelValue!: number;
  getModels!: any;
  getYears!: any;
  modelList!:  VehicleModel[]
  yearList!:  VehicleYear[]
  vehiclePriceFipe!: VehiclePrice[]
  yearValue!: string
  testevalor!: any
  testenumber!: string
  convertToNumber!: number

  testesenddata = this.vehiclePriceFipe
 
  constructor(private service: VehicleDataService) {}

  ngOnInit(): void {
    this.vehicleType = "1"; //define o valor default como 1, ou seja, carro
    this.service.carsList().subscribe(data => this.carType = data); //Chamando serviço para listagem de marcas de carro
    this.service.motoList().subscribe(data => this.motoType = data); //Chamando serviço para listagem de marcas de moto
    this.service.truckList().subscribe(data => this.truckType = data); //Chamando serviço para listagem de marcas de moto
    this.itemCategories = "0";
    // this.truckTypeValue = "1";
    // this.motoTypeValue = "1";
    this.carModelValue = 1;
    this.motoModelValue = 1;
    this.truckModelValue = 1;
    this.yearValue = "1"

  }

  listCarModel(codigo: any) {    
    this.service.listCarModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
      console.log(this.getModels)
    });
  }

  listMotoModel(codigo: any) {    
    this.service.listMotoModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
      console.log(this.getModels)
    });
  }

  listTruckModel(codigo: any) {    
    this.service.listTruckModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
      console.log(this.getModels)
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

  vehicleFIPEPrice(codigo: string, codigomodelo: number, codigoano: string) {    
    this.service.vehiclePriceFIPE(codigo, codigomodelo, codigoano).subscribe( response => {
      this.vehiclePriceFipe = response;
      this.testevalor = this.vehiclePriceFipe[0]
      // this.testenumber = this.testevalor.replace('R$ ', '').replace('.','')
      // this.convertToNumber = parseFloat(this.testenumber)
      // console.log(this.convertToNumber)
    });
  }

  

}
