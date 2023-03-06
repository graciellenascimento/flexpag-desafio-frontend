import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInputPriceComponent } from './vehicle-input-price.component';

describe('VehicleInputPriceComponent', () => {
  let component: VehicleInputPriceComponent;
  let fixture: ComponentFixture<VehicleInputPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInputPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInputPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
