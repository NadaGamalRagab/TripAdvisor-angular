import { Injectable } from '@angular/core';
import {Restaurant} from '../../_model/resturant/restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  resturant :Restaurant[]=[]

  baseUrl = 'https://sleepy-basin-52383.herokuapp.com/';

  constructor(private httpClient : HttpClient ) {
    this.getAllResturants().subscribe((resp) => {
      Object.values(resp).map((res) => {
        this.resturant.push(res);
      });
    });
  }

  getAllResturants() {
    return this.httpClient.get(`${this.baseUrl}resturants`);
  }

  getResturantById(_id: String) {
    return this.resturant.find((rest) => rest._id == _id);
  }

  searchByName(resturantName: string) {
    return this.resturant.filter((rest) =>
      rest.name.toLowerCase().includes(resturantName.toLowerCase())
    );
  }

}