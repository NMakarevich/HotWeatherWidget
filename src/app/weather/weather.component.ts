import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IHotelList} from "../../mock/hotelList";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  @Input()
  public hotelList: IHotelList[];

  @Input()
  public selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
