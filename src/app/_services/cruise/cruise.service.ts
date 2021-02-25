import { Injectable } from '@angular/core';
import { Cruise } from '../../_model/criuses/cruise';

@Injectable({
  providedIn: 'root'
})
export class CruiseService {
  private cruise: Cruise[] = [
    {
      _id: '1',
      shipName: 'MSC Opera | Balcony',
      price: 2179,
      discount: 150,
      sailingDate:'2021-10-24',
      departureMonth: 'Novamber',
      days: 20,
      whereTo: 'Caribbean',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 1',
        criuse_ship: 'ship 1',
        launched: '2004'
      },
      departsFrom: 'Hurghada',
      reviews: [{
        user_id: '1',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '1',
        rating: 5
      }]
    },
    {
      _id: '2',
      shipName: 'MSC Opera',
      price: 7000,
      // discount: 150,
      sailingDate: '2021-10-24',
      departureMonth: 'Novamber',
      days: 5,
      whereTo: 'Hurghada',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 2',
        criuse_ship: 'ship 2',
        launched: '2004'
      },
      departsFrom: 'Santa Maria',
      reviews: [{
        user_id: '2',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '2',
        rating: 5
      }]
    },
    {
      _id: '3',
      shipName: 'MSC Opera | Balcony',
      price: 1120,
      discount: 80,
      sailingDate: '2021-10-24',
      departureMonth: 'Novamber',
      days: 12,
      whereTo: 'Dubai',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 3',
        criuse_ship: 'ship 3',
        launched: '2004'
      },
      departsFrom: 'Bahamas',
      reviews: [{
        user_id: '3',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '3',
        rating: 5
      }]
    },
    {
      _id: '4',
      shipName: 'MSC Opera | Balcony',
      price: 2179,
      discount: 150,
      sailingDate: '2021-10-24',
      departureMonth: 'Novamber',
      days: 20,
      whereTo: 'Caribbean',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 4',
        criuse_ship: 'ship 4',
        launched: '2004'
      },
      departsFrom: 'Hurghada',
      reviews: [{
        user_id: '4',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '4',
        rating: 5
      }]
    },

    {
      _id: '5',
      shipName: 'MSC Opera',
      price: 12000,
      discount: 150,
      sailingDate: '2021-10-24',
      departureMonth: 'Novamber',
      days: 16,
      whereTo: 'Athens',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 5',
        criuse_ship: 'ship 5',
        launched: '2004'
      },
      departsFrom: 'Casablanca',
      reviews: [{
        user_id: '5',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '5',
        rating: 5
      }]
    },
    {
      _id: '6',
      shipName: 'MSC Opera | Balcony',
      price: 2179,
      // discount: 150,
      sailingDate: '2021-10-24',
      departureMonth: 'Novamber',
      days: 20,
      whereTo: 'Abu Dhabi',
      travelers: {
        passengers: 120,
        crew: 50
      },
      shipInfo: {
        company_line: 'line 6',
        criuse_ship: 'ship 6',
        launched: '2004'
      },
      departsFrom: 'Hurghada',
      reviews: [{
        user_id: '6',
        review: 'good cruise'
      }],
      rating: [{
        user_id: '6',
        rating: 5
      }]
    }
  ]

  constructor() { }

  getAllCruises(): Cruise[] {
    return this.cruise.slice();
  }

  getCruiseById(id) {
    return this.cruise.find(c => c._id == id);
  }

  updateCruise(cruise : Cruise) {
    const index = this.cruise.findIndex(c => c._id == cruise._id );
    // this.products[index] = { id:product.id, data:product.data, price:product.price, discount:product.discount, category:product.category, imagesUrls:product.imagesUrls, paymentTypes:product.paymentTypes, tags:product.tags }
}

// deleteProduct(id: number) {
//     const index = this.products.findIndex(p => p.id == id);
//     this.products.splice(index, 1);
// }

searchByName(cruiseName:string){
   return this.cruise.filter(c => c.shipName == cruiseName);
}

}
