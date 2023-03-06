import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleDataComponent } from '../vehicle-data/vehicle-data.component';

@Component({
  selector: 'app-vehicle-input-price',
  templateUrl: './vehicle-input-price.component.html',
  styleUrls: ['./vehicle-input-price.component.css']
})
export class VehicleInputPriceComponent {

  @Input() testeinput!: any //recebe o valor do veículo do arquivo vehicle-data para fazer o cálculo

  testeCalculo!: number
  getFIPEValue!: string
  testenumber!: string
  convertToNumber!: number
  decimalDigits!: string
  sorpraver!: string
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

  onSubmit(f: NgForm){
    // console.log(f.value.price)
    console.log(parseFloat(f.value.price))
    
    this.getFIPEValue = this.testeinput[0] //pega o primeiro valor do objeto que vem após a seleção do ano do veículo
    this.testenumber = this.getFIPEValue.replace('R$ ', '').replace('.','') //retira o R$ e o ponto do valor recebido pelo vehicle-data
    this.convertToNumber = parseFloat(this.testenumber) //transforma o valor em número para poder realizar o cálculo
    this.testeCalculo = +((((parseFloat(f.value.price)-this.convertToNumber)/this.convertToNumber)*100).toPrecision(2)) //cálculo para retirar média do valor de acordo com a tabela FIPE e .toPrecision() para reduzir as casas decimais para 2
    // this.decimalDigits = this.testeCalculo.toFixed(2) //deixar apenas 2 casas decimais

    this.aboveAverage = this.testeCalculo >= 10
    this.belowAverage = this.testeCalculo <= -10
    this.average = this.aboveAverage == false && this.belowAverage == false

    console.log(this.convertToNumber)
    // console.log(this.testeinput[0])
    console.log(this.convertToNumber+1000)
    console.log(this.testeCalculo)
    console.log(this.testeCalculo <= 10)
    console.log(this.average)

    this.fipeBrand = this.testeinput[1] //marca do veículo
    this.fipeModel = this.testeinput[2] //mode-lo do veículo
    this.fipeYear = this.testeinput[3] //ano do veículo
    this.fipeFuel = this.testeinput[4] //tipo de combustível do veículo
    this.fipeCode = this.testeinput[5] //código fipe 
    this.fipeReferenceMonth = this.testeinput[6] //mês de referência

  }

  constructor() {}


  ngOnInit(): void {
    this.sorpraver = '1'    
  }

}
