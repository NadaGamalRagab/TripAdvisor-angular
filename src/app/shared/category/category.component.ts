import { Component, OnInit } from '@angular/core';
import { HotelCategoryService } from './../../_services/hotel-category.service';
import { AllCategory } from './../../_model/hotels/AllCategory';
import { ThisReceiver } from '@angular/compiler';
import { HotelService } from 'src/app/_services/hotel.service';
import { HotelsFilteringService } from './../../_services/hotels-filtering.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: AllCategory;
  priceCategory: number = 0;
  selectType: string;
  value: number;
  constructor(
    private HotelCategoryService: HotelCategoryService,
    private HotelService: HotelService,
    private HotelsFilteringService: HotelsFilteringService
  ) {}

  ngOnInit(): void {
    this.categories = this.HotelCategoryService.getAllCategories();
  }

  distance(value: number) {
    this.value = value;
    return Math.round(value);
  }

  price(value: number) {
    this.priceCategory = value;
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  Filter(event) {
    this.HotelsFilteringService.Filter(event);
  }
  FilterDistance(event) {
    
  }
}
