import { Component, OnInit } from '@angular/core';
import { AllCategory } from 'src/app/_model/resturant/AllCategory';
import { ResturantCategoryService } from 'src/app/_services/resturants/resturant-category.service';
import { ResturantFilteringService } from 'src/app/_services/resturants/resturant-filtering.service';
import { ResturantService } from 'src/app/_services/resturants/resturant.service';

@Component({
  selector: 'app-resturant-category',
  templateUrl: './resturant-category.component.html',
  styleUrls: ['./resturant-category.component.scss']
})
export class ResturantCategoryComponent implements OnInit {

  categories: AllCategory;

 constructor(private ResturantCategoryService: ResturantCategoryService,
  private ResturantService: ResturantService,
  private ResturantFilteringService: ResturantFilteringService){

    this.ResturantCategoryService.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          //  console.log(res);
          this.categories = res;
        });
        //console.log(this.categories);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

 ngOnInit(){
  this.ResturantCategoryService.getAllCategories().subscribe(
    (resp) => {
      Object.values(resp).map((res) => {
        //  console.log(res);
        this.categories = res;
      });
      //console.log(this.categories);
    },
    (error) => {
      console.log(error);
    },
    () => {}
  );
 }

 Filter(event) {
  //console.log(event.target.id);
  this.ResturantFilteringService.Filtering.emit(event);
}
}
