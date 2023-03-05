import { Component } from '@angular/core';
import { findIndex } from 'rxjs';
import { VehicleDataService } from 'src/app/controller/vehicle-data.service';
import { VehicleData, VehicleModel, VehicleYear } from 'src/app/models/vehicle-data';

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
 
  constructor(private service: VehicleDataService) {}

  ngOnInit(): void {
    this.vehicleType = "1"; //define o valor default como 1, ou seja, carro
    this.service.carsList().subscribe(data => this.carType = data); //Chamando serviço para listagem de marcas de carro
    this.service.motoList().subscribe(data => this.motoType = data); //Chamando serviço para listagem de marcas de moto
    this.service.truckList().subscribe(data => this.truckType = data); //Chamando serviço para listagem de marcas de moto
    this.itemCategories = "1";
    // this.truckTypeValue = "1";
    // this.motoTypeValue = "1";
    this.carModelValue = 1;
    this.motoModelValue = 1;
    this.truckModelValue = 1;

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

  listCarYear(codigo: string, codigoano: number) {    
    this.service.listCarYears(codigo, codigoano).subscribe( response => {
      this.yearList = response;
    });
  }
  listMotoYear(codigo: string, codigoano: number) {    
    this.service.listMotoYears(codigo, codigoano).subscribe( response => {
      this.yearList = response;
    });
  }
  listTruckYear(codigo: string, codigoano: number) {    
    this.service.listTruckYears(codigo, codigoano).subscribe( response => {
      this.yearList = response;
    });
  }
  

}
