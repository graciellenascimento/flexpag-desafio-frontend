import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoValorComponent } from './resultado-valor.component';

describe('ResultadoValorComponent', () => {
  let component: ResultadoValorComponent;
  let fixture: ComponentFixture<ResultadoValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoValorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
