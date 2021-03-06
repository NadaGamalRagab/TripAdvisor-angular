import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/_model/hotels/hotel';
import { HotelService } from 'src/app/_services/hotel.service';
import { HotelCategoryService } from './../../_services/hotel-category.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
  
export class HotelComponent implements OnInit {
  @Input() hotel: Hotel;
  bestSeller: boolean;
  allInclusive: boolean;
  freeCancellation: boolean = false;
  reserveNow: boolean = false;
  theBestDeal = { obj: {}, img: '' };
  rate: number = 0;

  constructor(
    private hotelService: HotelService,
    private HotelCategoryService: HotelCategoryService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.BestSeller();
    this.AllInclusive();
    this.Deals();
    this.bestDeal();
  }

  BestSeller(): void {
    let sum: number = 0;
    let avg: number = 0;
    //console.log('from best seller');
    for (let rate of this.hotel.rating) {
      sum += rate.rate;
    }
    avg = sum / this.hotel.rating.length;
    this.rate = Math.floor(avg);
    // console.log(avg);
    avg > 4 ? (this.bestSeller = true) : (this.bestSeller = false);
    //console.log('bestSeller',this.bestSeller);
  }

  AllInclusive(): void {
    this.hotel.amenities.length > 6
      ? (this.allInclusive = true)
      : (this.allInclusive = false);
    //console.log('allInclusive', this.allInclusive);
  }
  Deals(): void {
    for (let deal of this.hotel.deals) {
      if (
        this.HotelCategoryService.getDealById(
          deal
        )[0].name.toLocaleLowerCase() == 'free cancellation'
      ) {
        this.freeCancellation = true;
      }
      if (
        this.HotelCategoryService.getDealById(
          deal
        )[0].name.toLocaleLowerCase() == 'reserve now, pay at stay'
      ) {
        this.reserveNow = true;
      }
    }
  }
  bestDeal() {
    this.theBestDeal.obj = {
      ...this.hotel.Pricedeals.filter(
        (p) =>
          p.pricePerNight ==
          Math.min(...this.hotel.Pricedeals.map((d) => d.pricePerNight))
      ),
    };
    // console.log(this.theBestDeal.obj[0].name);
    switch (this.theBestDeal.obj[0].name.toLowerCase()) {
      case 'expedia':
        this.theBestDeal.img =
          'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1';
        break;
      case 'hotels.com':
        this.theBestDeal.img =
          'https://www.headforpoints.com/wp-content/uploads/2015/01/hcom_the_obvious_choice_-_500x500-1.jpg';
        break;
      case 'trip.com':
        this.theBestDeal.img =
          'https://www.asiamiles.com/content/dam/am-content/brand-v2/travel-pillar/logo-image/Ctrip/Trip-logo-h-default-lg.png';

        break;
    }
  }

  Counter(i) {
    return new Array(i);
  }

  getAmt(_id) {
    return this.HotelCategoryService.getAmtById(_id)[0].name;
  }
  open(content) {
    this.modalService.open(content);
  }

  BookNow() {
    this.hotelService.viewDetails.emit(this.hotel);
  }
}
