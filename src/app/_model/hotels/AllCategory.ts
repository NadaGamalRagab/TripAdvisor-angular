import { category } from "./category";

export interface AllCategory {
  _id?: string;
  safety?: category;
  deals?: category[];
  popular?: category[];
  distance?: category[];
  aminities?: category[];
  hotelClass?: category[];
  languageSpoken?: category[];
}