import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {IHotelList, typesArr} from "../../mock/hotelList";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {

  @Input()
  public hotelList: IHotelList[];

  @Input()
  public selectedIndex: number;

  @Output()
  newIndex: EventEmitter<number> = new EventEmitter<number>();

  public types = typesArr;
  public country: string;

  public getIndex(hotel): number {
    this.selectedIndex = this.hotelList.indexOf(hotel);
    return this.selectedIndex;
  }

}
