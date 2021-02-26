import { Component, OnInit } from '@angular/core';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.scss']
})
export class RestaurantListingComponent implements OnInit {

  constructor(
    private ResturantCategoryService:ResturantCategoryService
  ) { }

  ngOnInit(): void {
    this.ResturantCategoryService.getAllCategories();
  }

}
