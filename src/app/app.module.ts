import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
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
    BrowserAnimationsModule,
    MatDatepickerModule,
     MatInputModule,
    MatNativeDateModule,
    MatSliderModule
     
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
