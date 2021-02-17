import { Component, OnInit } from '@angular/core';
import { HotelCategoryService } from './../../_services/hotel-category.service';
import { AllCategory } from './../../_model/hotels/AllCategory';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: AllCategory;
  priceCategory: number=0;
  constructor(private HotelCategoryService: HotelCategoryService) {}

  ngOnInit(): void {
    this.categories = this.HotelCategoryService.getAllCategories();
    console.log(this.categories);
  }

  distance(value: number) {
    return Math.round(value) + 'k';
  }

  price(value: number) {
    this.priceCategory = value;
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return (value);
  }

  checked() {
    console.log('name');
  }
}
