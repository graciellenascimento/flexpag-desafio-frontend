import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleDataComponent } from '../vehicle-data/vehicle-data.component';

@Component({
  selector: 'app-vehicle-input-price',
  templateUrl: './vehicle-input-price.component.html',
  styleUrls: ['./vehicle-input-price.component.css']
})
export class VehicleInputPriceComponent {

  @Input() testeinput!: any 

  onSubmit(f: NgForm){
    console.log(5+2)
    console.log(this.testeinput)
  }

  constructor(private dados: VehicleDataComponent) {}


  ngOnInit(): void {
  }

}
