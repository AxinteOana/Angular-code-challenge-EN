import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLicencePlateComponent } from './vehicle-licence-plate.component';

describe('VehicleLicencePlateComponent', () => {
  let component: VehicleLicencePlateComponent;
  let fixture: ComponentFixture<VehicleLicencePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleLicencePlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleLicencePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
