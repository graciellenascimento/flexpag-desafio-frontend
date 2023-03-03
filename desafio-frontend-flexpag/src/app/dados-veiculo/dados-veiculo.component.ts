import { Component, OnInit } from '@angular/core';
import { VeiculoMarca } from './dados-veiculo-tipagem';
import { DadosVeiculoService } from './dados-veiculo.service';

@Component({
  selector: 'app-dados-veiculo',
  templateUrl: './dados-veiculo.component.html',
  styleUrls: ['./dados-veiculo.component.css']
})
export class DadosVeiculoComponent implements OnInit{

  tipoVeiculo!: string; //value do select para escolher o tipo de veículo
  marcas!: VeiculoMarca[]; 
  
 constructor(private service: DadosVeiculoService) {}
  
 ngOnInit(): void {
    this.tipoVeiculo="1"; //definindo o valor default como 1, ou seja, carro

    this.service.listaCarros().subscribe(dados => this.marcas = dados); //Chamando serviço para listagem de marcas de carro
  }
}
