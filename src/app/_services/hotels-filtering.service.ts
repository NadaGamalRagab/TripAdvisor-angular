import { Injectable } from '@angular/core';
import { HotelCategoryService } from './hotel-category.service';
import { HotelService } from 'src/app/_services/hotel.service';
import { Hotel } from '../_model/hotels/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelsFilteringService {
  hotels: Hotel[];
  filterdHotels: Hotel[];
  constructor(
    private HotelCategoryService: HotelCategoryService,
    private HotelService: HotelService
  ) {
    this.getHotels();
  }

  getHotels() {
    this.hotels = this.HotelService.getAllHotels();
  }

  DealsFilter(event) {
    console.log(event);
  }
}
