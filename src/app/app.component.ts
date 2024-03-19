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

  constructor() { }

  onVehicleTypeChange(vehicleType: string) {
    this.selectedVehicleType = vehicleType;
  }

  
  // Function to validate the license plate number
  validateLicensePlate(plateNumber: string): boolean {
    // Implement your validation logic here
    // For example, you can check if the plate number matches the required format
    // Return true if the plate number is valid, otherwise false
    return /[A-Z]{2}-\d{2}-[A-Z]{2}/.test(plateNumber);
  }

  // Function to handle changes in the license plate number input
  onLicensePlateChange(plateNumber: string) {
    this.licensePlateNumber = plateNumber;
    this.isValidLicensePlate = this.validateLicensePlate(plateNumber);
  }

}