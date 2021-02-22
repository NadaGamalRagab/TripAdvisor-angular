import { Component, OnChanges, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_model/hotels/hotel';
import { HotelService } from 'src/app/_services/hotel.service';
import { HotelsFilteringService } from './../../_services/hotels-filtering.service';

@Component({
  selector: 'app-hotels-listing',
  templateUrl: './hotels-listing.component.html',
  styleUrls: ['./hotels-listing.component.scss'],
})
export class HotelsListingComponent implements OnInit, OnChanges {
  hotels: Hotel[];
  pageNumbers: number[] = [];
  pageSize: number = 2;
  currentPage: number = 0;

  constructor(
    private hotelService: HotelService,
    private HotelsFilteringService: HotelsFilteringService
  ) {}

  ngOnInit(): void {
    this.hotels = this.hotelService.getAllHotels();
    console.log(this.hotels.length);
    this.calculateNumberOfPages(this.hotels.length);
    this.HotelsFilteringService.Filtering.subscribe(
      (event) => {
        console.log(event);
        if (event.target.alt == 'distance') {
          this.hotels = this.HotelsFilteringService.FilterDistance(event);
        } else {
          this.hotels = this.HotelsFilteringService.Filter(event);
        }
        if (this.hotels.length == 0) {
          this.hotels = this.hotelService.getAllHotels();
        }
      },
      (error) => {
        console.log(error);
      },
      (copmleted) => {}
    );
  }
  ngOnChanges(): void {}

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
