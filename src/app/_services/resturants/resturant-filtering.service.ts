import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/_model/resturant/restaurant';
import { ResturantCategoryService } from './resturant-category.service';
import { ResturantService } from './resturant.service';

@Injectable({
  providedIn: 'root'
})
export class ResturantFilteringService {
  resturant: Restaurant[];
  tempRest: Restaurant[] = [];
  filterdRest: Restaurant[] = [];
  checkedArray = [];

  constructor(
    private ResturantCategoryService: ResturantCategoryService,
    private ResturantService: ResturantService) {
      this.ResturantService.getAllResturants().subscribe(
        (resp) => {
          Object.values(resp).map((res) => {
            //console.log(res);
            this.resturant.push(res);
          });
          // console.log(this.resturant);
        },
        (error) => {},
        () => {}
      )
     }

     Filter(event) {
      this.tempRest = [];
      if (event.target.checked) {
        this.checkedArray.push(event.target.id);
        //console.log(this.checkedArray);
      } else {
        this.checkedArray = this.checkedArray.filter(
          (p) => p !== event.target.id
        );
        //console.log(this.checkedArray);
      }
      // this.checkedArray.forEach((id) => {
      //   this.tempRest.push(
      //     //Deals Filtering
      //     ...this.resturant.filter(
      //       (e) => e.deals.filter((hotel) => hotel == id) == id
      //     ),
      //     // Popular Filtering
      //     ...this.resturant.filter(
      //       (e) => e.popular.filter((hotel) => hotel == id) == id
      //     ),
      //     // Aminities Filter
      //     ...this.resturant.filter(
      //       (e) => e.amenities.filter((hotel) => hotel == id) == id
      //     ),
      //     // Class Filtering
      //     ...this.resturant.filter((e) => e.class == id),
      //     // Language Filtering
      //     ...this.resturant.filter(
      //       (e) => e.languageSpoken.filter((hotel) => hotel == id) == id
      //     )
      //   );
      // });
      this.filterdRest = [...new Set(this.tempRest)];
      return this.filterdRest;
    }
}
