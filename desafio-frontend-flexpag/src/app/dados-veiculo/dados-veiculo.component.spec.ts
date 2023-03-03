import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVeiculoComponent } from './dados-veiculo.component';

describe('DadosVeiculoComponent', () => {
  let component: DadosVeiculoComponent;
  let fixture: ComponentFixture<DadosVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
