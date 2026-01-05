export interface Ride {
  id: string;
  ownerEmployeeId: string;
  vehicleType: 'Bike' | 'Car';
  vehicleNo: string;
  vacantSeats: number;
  time: string; // HH:mm in 24 hour format
  pickupPoint: string;
  destination: string;
  bookedEmployeeIds: string[];
}