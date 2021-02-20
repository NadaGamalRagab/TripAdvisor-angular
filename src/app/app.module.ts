
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponentComponent } from './hotels/hotel-component/hotel-component.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { CruisesComponent } from './cruises/cruises.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';
import {SmallCardsComponent } from './restaurants/small-cards/small-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponentComponent,
    HotelsListingComponent,
    CruisesComponent,
    HeaderComponent,
    FooterComponent
    RestaurantItemComponent,
    RestaurantListingComponent,
    SmallCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
