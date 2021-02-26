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
    //   Establishment: [
    //     { _id: '1', name: ' Restaurants' },
    //     { _id: '2', name: ' Desert' },
    //   ],
    //   features: [
    //     { _id: '3', name: 'Delivery' },
    //     { _id: '4', name: ' Takeout' },
    //     { _id: '5', name: 'Table Service' },
    //   ],
    //   meals: [
    //     { _id: '6', name: 'Lunch' },
    //     { _id: '7', name: 'Dinner' },
    //   ],
    //    Pricerange: { _id: '8', name: 'Fine Dinning' },
    //    cuisine: [
    //     { _id: '9', name: ' Mediterranean' },
    //     { _id: '10', name: 'Arabic' },
    //     { _id: '11', name: 'Lebanese' },
    //   ],
    //   dishes: [
    //     { _id: '12', name: 'Salad' },
    //     { _id: '13', name: 'Beef' },
    //     { _id: '14', name: 'fish' },
    //   ],
    //   DietaryRestrictions: [
    //     { _id: '15', name: 'Vegan' },
    //     { _id: '16', name: 'Halal' },
    //   ],
    //   goodFor: [
    //     { _id: '17', name: 'Kids' },
    //     { _id: '18', name: 'Large Groups' },
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