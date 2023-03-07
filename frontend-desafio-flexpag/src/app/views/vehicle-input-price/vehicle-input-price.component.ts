import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleDataComponent } from '../vehicle-data/vehicle-data.component';

@Component({
  selector: 'app-vehicle-input-price',
  templateUrl: './vehicle-input-price.component.html',
  styleUrls: ['./vehicle-input-price.component.css']
})
export class VehicleInputPriceComponent {

  @Input() receiveVehicleData!: any //recebe o valor do veículo do arquivo vehicle-data para fazer o cálculo

  percentageCalculation!: number
  getFIPEValue!: string
  replaceStringDetails!: string
  convertToNumber!: number
  decimalDigits!: string
  fipeBrand!: string;
  fipeModel!: string;
  fipeYear!: number;
  fipeFuel!: string;
  fipeCode!: string;
  fipeReferenceMonth!: string;
  greaterThan!: boolean;
  aboveAverage!: boolean;
  belowAverage!: boolean;
  average!: boolean;
  sellValueInput!: string;

  onSubmit(f: NgForm) {
    this.sellValueInput = f.value.price
    this.getFIPEValue = this.receiveVehicleData[0] //pega o primeiro valor do objeto que vem após a seleção do ano do veículo
    this.replaceStringDetails = this.getFIPEValue.replace('R$ ', '').replace('.', '').replace(',','') //retira o R$ e o ponto do valor recebido pelo vehicle-data
    this.convertToNumber = parseFloat(this.replaceStringDetails) //transforma o valor em número para poder realizar o cálculo
    this.percentageCalculation = +((((parseFloat(this.sellValueInput) - this.convertToNumber) / this.convertToNumber) * 100).toPrecision(2)) //cálculo para retirar média do valor de acordo com a tabela FIPE e .toPrecision() para reduzir as casas decimais para 2

    this.aboveAverage = this.percentageCalculation >= 10 //checa se o calculo é maior ou menor que 10. caso esteja, o valor está acima da média
    this.belowAverage = this.percentageCalculation <= -10 //checa se o calculo é menor ou maior que 10. caso esteja, o valor está abaixo da média
    this.average = this.aboveAverage == false && this.belowAverage == false //checa se o cálculo está entre -9.99 ~ 9.99. caso esteja, o valor está na média

    this.fipeBrand = this.receiveVehicleData[1] //marca do veículo
    this.fipeModel = this.receiveVehicleData[2] //modelo do veículo
    this.fipeYear = this.receiveVehicleData[3] //ano do veículo
    this.fipeFuel = this.receiveVehicleData[4] //tipo de combustível do veículo
    this.fipeCode = this.receiveVehicleData[5] //código fipe 
    this.fipeReferenceMonth = this.receiveVehicleData[6] //mês de referência
  }

  constructor() { }


  ngOnInit(): void { }

}
