import { category } from './category';

export interface AllCategory {
  _id?: string;
  establishmentType: category; //resturant,quickBites,desert,coffee&tea...
  restaurantFeatures: category[]; //delivery,takeout...
  meals: category[]; //breakfast,brunch, lunch....
  price : category; //cheap,mid,fine
  cuisine: category[]; //Mediterranean, European
  dishes : category[]; //salad,beef,fish
  Restrictions : category[]; //vegan,halal
  goodFor :category[]; // family,romantic
}
