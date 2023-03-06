import { Component, Input } from '@angular/core';
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
    this.vehicleType = "1"; //define o valor default como a 1ª opção do select
    this.service.carsList().subscribe(data => this.carType = data); //Chamando serviço para listagem de marcas de carro
    this.service.motoList().subscribe(data => this.motoType = data); //Chamando serviço para listagem de marcas de moto
    this.service.truckList().subscribe(data => this.truckType = data); //Chamando serviço para listagem de marcas de moto
    this.itemCategories = "0"; 
    this.carModelValue = 1; //define o valor default do select de modelo do carro
    this.motoModelValue = 1; //define o valor default do select de modelo da moto
    this.truckModelValue = 1; //define o valor default do select de modelo do caminhão
    this.carYearValue = "1" //define o valor default do select de ano do carro
    this.motoYearValue = "1" //define o valor default do select de modelo da moto
    this.truckYearValue = "1" //define o valor default do select de modelo do caminhão

  }


  //lista os modelos de carro
  listCarModel(codigo: any) {    
    this.service.listCarModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }

  //lista os modelos de moto
  listMotoModel(codigo: any) {    
    this.service.listMotoModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }


  //lista os modelos de caminhão
  listTruckModel(codigo: any) {    
    this.service.listTruckModels(codigo).subscribe( response => {
      this.modelList = response;

      this.getModels = this.modelList[0]
    });
  }

  //lista os anos dos carros
  listCarYear(codigo: string, codigomodelo: number) {    
    this.service.listCarYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }

  //lista os anos das motos
  listMotoYear(codigo: string, codigomodelo: number) {    
    this.service.listMotoYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }

  //lista os anos dos caminhões
  listTruckYear(codigo: string, codigomodelo: number) {    
    this.service.listTruckYears(codigo, codigomodelo).subscribe( response => {
      this.yearList = response;
    });
  }

  //as funções a seguir pegam os dados recebidos após a coleta de todas as informações (tipo de veículo, marca, modelo e ano)
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
