import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorVendaComponent } from './valor-venda.component';

describe('ValorVendaComponent', () => {
  let component: ValorVendaComponent;
  let fixture: ComponentFixture<ValorVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
