import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_model/hotels/hotel';
import { HotelService } from 'src/app/_services/hotel.service';

@Component({
  selector: 'app-hotels-listing',
  templateUrl: './hotels-listing.component.html',
  styleUrls: ['./hotels-listing.component.scss'],
})
export class HotelsListingComponent implements OnInit {
  hotels: Hotel[];
  pageNumbers: number[] = [];
  pageSize: number = 6;
  currentPage: number = 0;

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotels = this.hotelService.getAllHotels();
  }

  calculateNumberOfPages(length) {
    this.pageNumbers = [];
    for (let index = 0; index < length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  getHotelsSlice() {
    const start = this.currentPage * this.pageSize;
    return this.hotels.slice(start, start + this.pageSize);
  }

  onSearchHandler(searchInput) {
    console.log(searchInput.value);
    this.hotels = this.hotelService.searchByName(searchInput.value);
    if (this.hotels.length <= 6) {
      this.currentPage = 0;
    } else {
      this.currentPage = 0;
    }
    // this.calculateNumberOfPages();
  }
}
