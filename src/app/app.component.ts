import {Component, ViewEncapsulation} from '@angular/core';
import {hotelList, IHotelList} from "../mock/hotelList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title = 'Hot Weather Widget';
  public hotelList: IHotelList[] = hotelList;
  public selectedIndex: number = 0;

  public changeIndex(newIndex: number) {
    this.selectedIndex = newIndex;
  }
}
