import { Injectable } from '@angular/core';
import { AllCategory } from './../_model/hotels/AllCategory';

@Injectable({
  providedIn: 'root',
})
export class HotelCategoryService {
  categoryList: AllCategory = {
    _id: '2525',
    safety: { _id: '1', name: 'Properties taking safety measures' },
    deals: [
      { _id: '2', name: 'Free cancellation' },
      { _id: '3', name: 'Reserve now, pay at stay' },
      { _id: '4', name: 'Properties with special offers' },
    ],
    popular: [
      { _id: '5', name: 'Beachfront' },
      { _id: '6', name: '5 rate' },
      { _id: '7', name: '5 stars' },
      { _id: '8', name: 'Romantic' },
    ],
    distance: [
      { _id: '9', name: 'From beach' },
      { _id: '10', name: 'From Main Street' },
      { _id: '11', name: 'From City Center' },
      { _id: '12', name: 'From Park' },
    ],
    price: [
      { _id: '30', name: 'EGP' },
      { _id: '31', name: 'USD' },
      { _id: '32', name: '$' },
    ],
    aminities: [
      { _id: '13', name: 'Free Parking' },
      { _id: '14', name: 'Pool' },
      { _id: '15', name: 'Free Wifi' },
      { _id: '16', name: 'Spa' },
      { _id: '17', name: 'Golf Course' },
      { _id: '18', name: 'Breakfast Included' },
      { _id: '19', name: 'Air Conditioning' },
      { _id: '20', name: 'Water Park' },
    ],
    hotelClass: [
      { _id: '21', name: '5 Stars' },
      { _id: '22', name: '4 Stars' },
      { _id: '23', name: '3 Stars' },
      { _id: '24', name: '2 Stars' },
    ],
    languageSpoken: [
      { _id: '25', name: 'English' },
      { _id: '26', name: 'French' },
      { _id: '27', name: 'Spanish' },
      { _id: '28', name: 'Arabic' },
      { _id: '29', name: 'German' },
    ],
  };

  constructor() { }
  getAllCategories() {
    return this.categoryList;
  }
}
