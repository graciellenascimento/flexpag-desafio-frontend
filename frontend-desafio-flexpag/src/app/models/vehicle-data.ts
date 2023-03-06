//tipagem da marca do veículo
export interface VehicleData {
    nome: string;
    codigo: string    
}

//tipagem do modelo do veículo, como a requisição retorna um objeto com dois arrays, foi necessário fazer a tipagem dos dois
export interface VehicleModel {
    '0': { //modelo
        nome: string,
        codigo: number
    }
    '1': { //ano
        nome: string,
        codigo: string
    }
}

//tipagem do ano do veículo
export interface VehicleYear {
    nome: string;
    codigo: string;
}


