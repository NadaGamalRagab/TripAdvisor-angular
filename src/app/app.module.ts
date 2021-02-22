import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { HeaderComponent } from './layout/header/header.component';
import { ShoppingItemComponent } from './shopping/shopping-item/shopping-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingTicketComponent } from './shopping/shopping-ticket/shopping-ticket.component';
import { TypesService } from './_services/types.service';
import { RecommendationService } from './_services/recommendation.service';
import { ShoppingService } from './_services/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    HeaderComponent,
    ShoppingItemComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [TypesService, RecommendationService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
