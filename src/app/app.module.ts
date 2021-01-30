import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponentComponent } from './hotels/hotel-component/hotel-component.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { CruisesComponent } from './cruises/cruises.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponentComponent,
    HotelsListingComponent,
    CruisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
