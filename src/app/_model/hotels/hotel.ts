import { Booking } from "./booking";
import { Distance } from "./distance";
import { PriceDeals } from "./PriceDeals";
import { Rating } from "./rating";
import { Reviews } from "./Reviews";

export interface Hotel {
    _id: string;
    name: string;
    booking: Booking[],
    map: string,
    Pricedeals: PriceDeals[],
    rooms: number,
    images: string[],
    deals: string[],
    amenities: string[],
    class: number,
    distance: Distance,
    reviews: Reviews[],
    rating : Rating[], 
    style?: string[],
    languageSpoken : string[]
}