import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CruisesComponent } from './cruise/cruises/cruises.component';
import { HomeListingComponent } from './home/home-listing/home-listing.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';
import { ShoppingPageComponent } from './shopping/shopping-page/shopping-page.component';
import { ShoppingTicketComponent } from './shopping/shopping-ticket/shopping-ticket.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:'home',component : HomeListingComponent},
   {path:'hotels',component : HotelsListingComponent},
   {path:'cruises',component : CruisesComponent},
   {path:'resturants',component : RestaurantListingComponent},
   {path:'shopping',component : ShoppingPageComponent}, 
   {path:'profile',component : ProfileComponent},
  //  {path:'**', component :PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
