import { Component, Input } from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-vehicle-licence-plate',
  templateUrl: './vehicle-licence-plate.component.html',
  styleUrls: ['./vehicle-licence-plate.component.css']
})
export class VehicleLicencePlateComponent {
  licensePlate: string = '';
  isValidLicensePlate: boolean = true;
  private kentekenCheck: KentekenCheck;

  constructor() {
    this.kentekenCheck = new KentekenCheck('');
  }

  formatLicensePlate() {
    // Format the license plate number according to the rules
    // Insert dash between numbers and letters
    this.licensePlate = this.licensePlate.replace(/([A-Za-z]+)(\d+)([A-Za-z]+)/, '$1-$2-$3');
    // Insert dash after every two characters for letter combinations of 4 characters
    this.licensePlate = this.licensePlate.replace(/([A-Za-z]{2})([A-Za-z]{2})/, '$1-$2');
    
    this.isValidLicensePlate = true; // Dummy validation for now
  }

  validateLicenseOnBlur() {
    const formattedValue =  this.licensePlate;
    this.validateLicensePlate(formattedValue).subscribe();
  }

  validateLicensePlate(value: string): Observable<any> {
    this.kentekenCheck.kenteken = value;
    const isValid = this.kentekenCheck.matchLicense(value) && this.kentekenCheck.checkForbiddenCharacters(value);
    if (!isValid) {
     //throw errors here
      return of(null);
    }
    return of(true);
  }
}