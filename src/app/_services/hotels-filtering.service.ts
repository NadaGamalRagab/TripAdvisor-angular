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
  checkedArray = [];
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
    this.tempHotels = [];
    if (event.target.checked) {
      this.checkedArray.push(event.target.id);
      console.log(this.checkedArray);
    } else {
      this.checkedArray = this.checkedArray.filter(
        (p) => p !== event.target.id
      );
      console.log(this.checkedArray);
    }
    this.checkedArray.forEach((id) => {
      this.tempHotels.push(
        //Deals Filtering
        ...this.hotels.filter(
          (e) => e.deals.filter((hotel) => hotel == id) == id
        ),
        // Popular Filtering
        ...this.hotels.filter(
          (e) => e.popular.filter((hotel) => hotel == id) == id
        ),
        // Aminities Filter
        ...this.hotels.filter(
          (e) => e.amenities.filter((hotel) => hotel == id) == id
        ),
        // Class Filtering
        ...this.hotels.filter((e) => e.class == id),
        // Language Filtering
        ...this.hotels.filter(
          (e) => e.languageSpoken.filter((hotel) => hotel == id) == id
        )
      );
    });
    this.filterdHotels = [...new Set(this.tempHotels)];
    console.log(this.filterdHotels);
  }

  FilterDistance(event, value) {
    
  }
}
