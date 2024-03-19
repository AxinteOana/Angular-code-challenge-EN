import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.css']
})
export class VehicleTypeComponent {
  vehicleTypes = ['Auto', 'Motor', 'Scooter'];

  @Output() vehicleTypeChange = new EventEmitter<string>();

  constructor() { }

  onVehicleTypeChange(event: any) {
    this.vehicleTypeChange.emit(event.target.value);
  }
}
