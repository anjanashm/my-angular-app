import { RouterModule, Routes } from '@angular/router';
import { AddRideComponent } from './pages/add-ride/add-ride.component';
import { BookRideComponent } from './pages/book-ride/book-ride.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent, pathMatch: 'full' },
    { path: 'add-ride', component: AddRideComponent },
    { path: 'book-ride', component: BookRideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
