import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'book-ride',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-ride.component.html',
})
export class BookRideComponent {

  constructor(private rideService: RideService) {}

  employeeId: string = '';


 get isBookRideInvalid() {
  return !this.employeeId || this.rideService.allBookedEmployeeIds?.includes(this.employeeId);
}

  bookRide() {  
    this.rideService.allBookedEmployeeIds.push(this.employeeId);
  }
}
