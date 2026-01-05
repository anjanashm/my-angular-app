import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddRideComponent } from './pages/add-ride/add-ride.component';
import { BookRideComponent } from './pages/book-ride/book-ride.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookRideComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');

}
