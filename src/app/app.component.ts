import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedVehicleType: string = 'Auto';
  licensePlateNumber: string = ''; // Initialize license plate number
  isValidLicensePlate: boolean = true; // Flag to track the validity of the license plate number
  isValid: boolean = true;
  constructor() { }

  onVehicleTypeChange(vehicleType: string) {
    this.selectedVehicleType = vehicleType;
  }

  onSubmit() {
    // Here you can implement the logic to handle the submit action
    // For example, you can perform form validation before submitting
    this.isValid = true; // Dummy validation for now
  }

}