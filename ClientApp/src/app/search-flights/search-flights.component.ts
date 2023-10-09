import { Component } from '@angular/core';
import { FlightService } from '../api/services';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.scss']
})
export class SearchFlightsComponent {

  searchResult: FlightRm[] = []

  constructor(private flightService: FlightService)
  {
    this.flightService.flightGet()
      .subscribe(response => this.searchResult = response, this.HandleError);
  }

  private HandleError(err: any) {
    console.log(err);
  }

}

export interface TimePlaceRM{
  place: string;
  time: string;
}
// export interface FlightRm{
//   airline: string;
//   arrival: TimePlaceRM;
//   departure: TimePlaceRM;
//   price: string;
//   remainingNumberOfSeats: number;
//   id: number;
// }
