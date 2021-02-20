
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { DateSectionComponent } from './hotels/date-section/date-section.component';
import { CategoryComponent } from './shared/category/category.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { DetailsComponent } from './hotels/details/details.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { HotelsFilteringService } from './_services/hotels-filtering.service';
import { HotelCategoryService } from './_services/hotel-category.service';
import { CruisesComponent } from './cruises/cruises.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RestaurantListingComponent } from './restaurants/restaurant-listing/restaurant-listing.component';
import {SmallCardsComponent } from './restaurants/small-cards/small-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListingComponent,
    DateSectionComponent,
    CategoryComponent,
    HotelComponent,
    DetailsComponent,
    CruisesComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantItemComponent,
    RestaurantListingComponent,
    SmallCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSliderModule,
  ],
  providers: [
    HotelsFilteringService,
    HotelsListingComponent,
    HotelCategoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
