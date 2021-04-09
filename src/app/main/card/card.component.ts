import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IHotelList} from "../../../mock/hotelList";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input()
  public hotel: IHotelList;

  constructor() { }

  ngOnInit(): void {
  }

}
