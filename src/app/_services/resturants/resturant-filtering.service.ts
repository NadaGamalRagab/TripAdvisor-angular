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

    
}
