import { TestBed } from '@angular/core/testing';

import { DadosVeiculoService } from './dados-veiculo.service';

describe('DadosVeiculoService', () => {
  let service: DadosVeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosVeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
