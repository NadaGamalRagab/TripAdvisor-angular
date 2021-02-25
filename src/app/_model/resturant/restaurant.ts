import { Reviews } from './Reviews';
import { Rating } from './rating';
export interface Restaurant{
_id:string;
name:string;
imagesUrls?:string[];
reviews: Reviews[];
rating: Rating[];
}