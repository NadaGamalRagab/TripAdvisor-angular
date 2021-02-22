"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var shopping_component_1 = require("./shopping/shopping/shopping.component");
var header_component_1 = require("./layout/header/header.component");
var shopping_item_component_1 = require("./shopping/shopping-item/shopping-item.component");
var footer_component_1 = require("./layout/footer/footer.component");
var shopping_list_component_1 = require("./shopping/shopping-list/shopping-list.component");
var shopping_ticket_component_1 = require("./shopping/shopping-ticket/shopping-ticket.component");
var types_service_1 = require("./_services/types.service");
var recommendation_service_1 = require("./_services/recommendation.service");
var shopping_service_1 = require("./_services/shopping.service");
var core_2 = require("@agm/core");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                shopping_component_1.ShoppingComponent,
                header_component_1.HeaderComponent,
                shopping_item_component_1.ShoppingItemComponent,
                footer_component_1.FooterComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_ticket_component_1.ShoppingTicketComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBa5jhJenT2dnOSnWnOfciLjHQnfhxYba8'
                })
            ],
            providers: [types_service_1.TypesService, recommendation_service_1.RecommendationService, shopping_service_1.ShoppingService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
