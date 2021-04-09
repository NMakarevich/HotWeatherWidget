import { Pipe, PipeTransform } from '@angular/core';
import {IHotelList} from "../../mock/hotelList";

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(hotelList: IHotelList[], country: string): unknown {
    if(!country || country === "All") {
      return hotelList;
    }
    return hotelList.filter((hotel) => {
      return hotel.type === country;
    });
  }

}
