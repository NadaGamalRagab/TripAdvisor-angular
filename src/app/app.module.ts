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
import { HotelsFilteringService } from './_services/hotels-filtering.service';
import { HotelCategoryService } from './_services/hotel-category.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListingComponent,
    DateSectionComponent,
    CategoryComponent,
    HotelComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [
    HotelsFilteringService,
    HotelsListingComponent,
    HotelCategoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
