import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponentComponent } from './hotels/hotel-component/hotel-component.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { HomeListingComponent } from './home/home-listing/home-listing.component';
import { CardComponent } from './home/card/card.component';
import { ButtonComponent } from './home/button/button.component';
import { SearchPipe } from './pipes/search.pipe';
/* import { MDBBootstrapModule } from 'angular-bootstrap-md'; */

@NgModule({
  declarations: [
    AppComponent,
    HotelComponentComponent,
    HotelsListingComponent,
    HomeListingComponent,
    CardComponent,
    ButtonComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
