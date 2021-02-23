import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CruisesComponent } from './cruise/cruises/cruises.component';
import {HotelsListingComponent} from './hotels/hotels-listing/hotels-listing.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';


const routes: Routes = [
   // {path:'/',component : HotelsListingComponent},
   {path:'hotels',component : HotelsListingComponent},
   {path:'cruises',component : CruisesComponent},
   {path:'resturants',component : RestaurantListingComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
