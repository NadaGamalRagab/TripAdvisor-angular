import { Ratings } from "./ratings";
import { Reviews } from "./reviews";
import { ShipInfo } from "./ship-info";
import { Travelers } from "./travelers";


export interface Cruise {
    _id?: string;
    // country?: string;
    // city?: string;
    shipName?:string ;
    price?: number;
    discount?: number;
    sailingDate?: string;
    departureMonth?: string;
    days?: number;
    whereTo?: string;
    travelers?: Travelers;
    shipInfo?: ShipInfo;
    departsFrom?: string;
    reviews?: Reviews[];
    rating?: Ratings[];
   

}

