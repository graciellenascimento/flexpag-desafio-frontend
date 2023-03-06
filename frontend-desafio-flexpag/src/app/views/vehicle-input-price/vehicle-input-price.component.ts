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
  testenumber!: string
  convertToNumber!: number

  onSubmit(f: NgForm){
    console.log(f.value.price)
    console.log(parseFloat(f.value.price))
    
    this.testenumber = this.testeinput.replace('R$ ', '').replace('.','') //retira o R$ e o ponto do valor recebido pelo vehicle-data
    this.convertToNumber = parseFloat(this.testenumber) //transforma o valor em número para poder realizar o cálculo
    this.testeCalculo = ((parseFloat(f.value.price)-this.convertToNumber)/this.convertToNumber)*100 //cálculo para retirar média do valor de acordo com a tabela FIPE
    console.log(this.convertToNumber)
    console.log(this.testeinput)
    console.log(this.convertToNumber+1000)
    console.log('media tabela fipe: ' + this.testeCalculo)
  }

  constructor() {}


  ngOnInit(): void {
  }

}
