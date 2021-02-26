import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllCategory } from 'src/app/_model/resturant/AllCategory';

@Injectable({
  providedIn: 'root'
})
export class ResturantCategoryService {
  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/resturants/';
  categoryList: AllCategory;
  // categoryList: AllCategory = {
    //   _id: '1000',
    //   Establishment: { _id: '1', name: ' Restaurants' },
    //   features: [
    //     { _id: '2', name: 'Delivery' },
    //     { _id: '3', name: ' Takeout' },
    //     { _id: '4', name: 'Table Service' },
    //   ],
    //   meals: [
    //     { _id: '5', name: 'Lunch' },
    //     { _id: '6', name: 'Dinner' },
    //   ],
    //    Pricerange: { _id: '7', name: 'Fine Dinning' },
    //    cuisine: [
    //     { _id: '8', name: ' Mediterranean' },
    //     { _id: '9', name: 'Arabic' },
    //     { _id: '10', name: 'Lebanese' },
    //   ],
    //   dishes: [
    //     { _id: '11', name: 'Salad' },
    //     { _id: '12', name: 'Beef' },
    //     { _id: '13', name: 'fish' },
    //   ],
    //   DietaryRestrictions: [
    //     { _id: '14', name: 'Vegan' },
    //     { _id: '15', name: 'Halal' },
    //   ],
    //   goodFor: [
    //     { _id: '16', name: 'Kids' },
    //     { _id: '17', name: 'Large Groups' },
    //   ],
    // };

  getAllCategories() {
    return this.httpClient.get(`${this.baseUrl}Category`);
  }
  
  constructor(private httpClient: HttpClient) {

    this.getAllCategories().subscribe(
      (resp) => {
        Object.values(resp).map((res) => {
          this.categoryList = res;
        });
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  getFeaturesById(_id: string) {
    return this.categoryList.features.filter((p) => p._id == _id);
  }
  getMealsById(_id: string) {
    return this.categoryList.meals.filter((p) => p._id == _id);
  }
  getCuisinesById(_id: string) {
    return this.categoryList.cuisine.filter((p) => p._id == _id);
  }
  getRestrictionsById(_id: string) {
    return this.categoryList.DietaryRestrictions.filter((p) => p._id == _id);
  }
  getGoodforById(_id: string) {
    return this.categoryList.goodFor.filter((p) => p._id == _id);
  }

  



  
}