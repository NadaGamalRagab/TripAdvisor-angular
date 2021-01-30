import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponentComponent } from './hotels/hotel-component/hotel-component.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';
import { CruisesComponent } from './cruises/cruises.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponentComponent,
    HotelsListingComponent,
    CruisesComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
