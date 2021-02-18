import { Injectable } from '@angular/core';
import { HotelCategoryService } from './hotel-category.service';
import { HotelService } from 'src/app/_services/hotel.service';
import { Hotel } from '../_model/hotels/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelsFilteringService {
  hotels: Hotel[];
  tempHotels: Hotel[] = [];
  filterdHotels: Hotel[] = [];

  constructor(
    private HotelCategoryService: HotelCategoryService,
    private HotelService: HotelService
  ) {
    this.getHotels();
  }

  getHotels() {
    this.hotels = this.HotelService.getAllHotels();
  }

  Filter(event) {
    let target = event.target.alt;
    if (event.target.checked) {
      if (target == 'deals') {
        this.tempHotels.push(
          ...this.hotels.filter(
            (e) =>
              e.deals.filter((hotel) => hotel == event.target.id) ==
              event.target.id
          )
        );
      }
      if (target == 'popular') {
        this.tempHotels.push(
          ...this.hotels.filter(
            (e) =>
              e.popular.filter((hotel) => hotel == event.target.id) ==
              event.target.id
          )
        );
      }
      this.filterdHotels = [...new Set(this.tempHotels)];
    } else {
      if (target == 'deals') {
        this.tempHotels = this.filterdHotels.filter(
          (e) =>
            e.deals.filter((hotel) => hotel == event.target.id) == event.target.id
        );
      }
        if (target == 'popular') {
          this.tempHotels = this.filterdHotels.filter(
            (e) =>
              e.popular.filter((hotel) => hotel == event.target.id) ==
              event.target.id
          );
        }
      //console.log('temp : ', this.tempHotels);
      this.tempHotels.forEach((t) => {
        this.filterdHotels.forEach((f) => {
          if (f._id === t._id) {
            var index = this.filterdHotels.indexOf(f);
            this.filterdHotels.splice(index, 1);
          }
        });
      });
    }
    console.log(this.filterdHotels);
  }

}
