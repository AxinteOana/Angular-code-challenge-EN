import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vehicle-subtype',
  templateUrl: './vehicle-subtype.component.html',
  styleUrls: ['./vehicle-subtype.component.css']
})
export class VehicleSubtypeComponent implements OnChanges {
  @Input() selectedVehicleType: string = '';
  @Output() vehicleSubtypeChange = new EventEmitter<string>();

  showSubtypeSelect: boolean = false;
  subtypes: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedVehicleType) {
      this.updateSubtypes();
    }
  }

  updateSubtypes() {
    switch (this.selectedVehicleType) {
      case 'Auto':
        this.showSubtypeSelect = true;
        this.subtypes = ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle (MVP)', 'Terreinauto'];
        break;
      case 'Motor':
        this.showSubtypeSelect = true;
        this.subtypes = ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan'];
        break;
      case 'Scooter':
        this.showSubtypeSelect = false;
        this.subtypes = [];
        break;
      default:
        this.showSubtypeSelect = false;
        this.subtypes = [];
        break;
    }
    this.emitSubtypeChange();
  }

  emitSubtypeChange() {
    if (this.subtypes.length > 0) {
      this.vehicleSubtypeChange.emit(this.subtypes[0]); // Emit the first subtype by default
    } else {
      this.vehicleSubtypeChange.emit(''); // Emit empty string if no subtype available
    }
  }

  onVehicleSubtypeChange(event: any) {
    this.vehicleSubtypeChange.emit(event.target.value);
  }
}
