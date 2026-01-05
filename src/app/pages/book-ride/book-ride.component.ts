import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'book-ride',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-ride.component.html',
})
export class BookRideComponent {

 @Input() allBookedEmployeeIds!: string[];

  @Output() rideBooked = new EventEmitter<string>();

  employeeId: string = '';

 get isBookRideInvalid() {
  return !this.employeeId || this.allBookedEmployeeIds?.includes(this.employeeId);
}

  bookRide() {  
    this.rideBooked.emit(this.employeeId);
    console.log(this.employeeId);
  }
}
