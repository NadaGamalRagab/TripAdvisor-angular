import { Injectable } from '@angular/core';
import { AllCategory } from './../_model/hotels/AllCategory';

@Injectable({
  providedIn: 'root'
})
export class HotelCategoryService {
  categoryList: AllCategory

  constructor() { }
}
