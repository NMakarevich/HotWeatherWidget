import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IHotelList} from "../../mock/hotelList";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent {

  @Input()
  public hotelList: IHotelList[];

  @Input()
  public selectedIndex: number;
}
