import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent {

  searchResult: FlightRM[] = [
    {
      id: 1,
      airline: "AirLine1",
      remainingNumberOfSeats: 500,
      departure: {
        time: Date.now().toString(),
        place: "Surat"
      },
      price: "350",
      arrival:{
        time: Date.now().toString(),
        place: "Mumbai"
      }
    },
    {
      id:2,
      airline: "AirLine2",
      remainingNumberOfSeats: 600,
      departure: {
        time: Date.now().toString(),
        place: "Mumbai"
      },
      price: "450",
      arrival:{
        time: Date.now().toString(),
        place: "Banglore"
      }
    },
    {
      id:3,
      airline: "AirLine3",
      remainingNumberOfSeats: 200,
      departure: {
        time: Date.now().toString(),
        place: "Pune"
      },
      price: "220",
      arrival:{
        time: Date.now().toString(),
        place: "Delhi"
      }
    },
    {
      id: 4,
      airline: "AirLine4",
      remainingNumberOfSeats: 500,
      departure: {
        time: Date.now().toString(),
        place: "Ajmer"
      },
      price: "890",
      arrival:{
        time: Date.now().toString(),
        place: "Surat"
      }
   }
  ]

}

export interface TimePlaceRM{
  place: string;
  time: string;
}
export interface FlightRM{
  airline: string;
  arrival: TimePlaceRM;
  departure: TimePlaceRM;
  price: string;
  remainingNumberOfSeats: number;
  id: number;
}
