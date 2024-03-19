import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-image',
  template: `
  <picture>
    <img [src]="getImagePath()" [alt]="selectedVehicleType" class="object-cover h-full w-full">
  </picture>
`,
  styleUrls: ['./vehicle-image.component.css']
})

export class VehicleImageComponent{
  @Input() selectedVehicleType: string = 'Auto';

  getImagePath(): string {
    switch (this.selectedVehicleType) {
      case 'Auto':
        return './assets/auto.jpg';
      case 'Motor':
        return './assets/motor.jpg';
      case 'Scooter':
        return './assets/scooter.jpg';
      default:
        return '';
    }
  }
}
