import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'add-ride',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-ride.component.html',
})
export class AddRideComponent {

  addRideForm: FormGroup;

  constructor(private fb: FormBuilder, private rideService: RideService) {
    this.addRideForm = this.fb.group({
      employeeId: ['', Validators.required],
      vehicleType: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vacantSeats: [1, [Validators.required, Validators.min(1)]],
      time: ['', Validators.required],
      pickupPoint: ['', Validators.required],
      destination: ['', Validators.required]
    });
  }

  addRide(): void {
    if (this.addRideForm.invalid) {
      this.addRideForm.markAllAsTouched();
      return;
    }

    const newRide = {
      ownerEmployeeId: this.addRideForm.value.employeeId,
      vehicleType: this.addRideForm.value.vehicleType,
      vehicleNo: this.addRideForm.value.vehicleNo,
      vacantSeats: this.addRideForm.value.vacantSeats,
      time: this.addRideForm.value.time,
      pickupPoint: this.addRideForm.value.pickupPoint,
      destination: this.addRideForm.value.destination,
      bookedEmployeeIds: []
    };

    this.rideService.allAvailableRides.push(newRide);

    this.addRideForm.reset({
      vacantSeats: 1
    });
  }
}
