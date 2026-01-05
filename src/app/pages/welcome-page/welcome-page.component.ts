import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-page',
  standalone: true,
  templateUrl: './welcome-page.html'
})
export class WelcomePageComponent {

    constructor(private router: Router) {}

    openBookRide() {
        this.router.navigate(['/book-ride']);
    }

    openAddRide() {
        this.router.navigate(['/add-ride']);
    }

    openViewRides() {
        //to be implemented
    }
    
}
