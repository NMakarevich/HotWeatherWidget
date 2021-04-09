import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IHotelList} from "../../mock/hotelList";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SocialComponent implements OnInit {

  @Input()
  public hotelList: IHotelList[];

  @Input()
  public selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
