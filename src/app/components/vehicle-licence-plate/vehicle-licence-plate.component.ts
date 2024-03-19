import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-licence-plate',
  templateUrl: './vehicle-licence-plate.component.html',
  styleUrls: ['./vehicle-licence-plate.component.css']
})
export class VehicleLicencePlateComponent {
  @Input() plateNumber: string = '';

  constructor() { }

  formatLicensePlate(plateNumber: string): string {
    if (!plateNumber) return '';

    // Check if the plate number is in the format "AA14BB"
    if (plateNumber.length === 6) {
      return plateNumber.substr(0, 2) + '-' + plateNumber.substr(2, 2) + '-' + plateNumber.substr(4, 2);
    }
    // Check if the plate number is in the format "12AABB"
    else if (plateNumber.length === 6) {
      return plateNumber.substr(0, 2) + '-' + plateNumber.substr(2, 2) + '-' + plateNumber.substr(4, 2);
    }
    // Default case
    else {
      return plateNumber;
    }
  }
}
