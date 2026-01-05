import { Ride } from "../models/rides.model";


import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})

export class RideService {

//currently I am mocking the data. Later it can be integrated however necessary    
allAvailableRides: Ride[] = [{
  ownerEmployeeId: 'EMP111',
  vehicleType: 'Bike',
  vehicleNo: 'KA03N353',
  vacantSeats: 2,
  time: '13:00',
  pickupPoint: 'Mahadevpura',
  destination: 'Electronic City',
  bookedEmployeeIds: ['EMP000'],
}];

allBookedEmployeeIds = ['EMP000']; }