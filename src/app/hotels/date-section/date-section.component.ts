import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { type } from 'os';
import { HotelService } from 'src/app/_services/hotel.service';

@Component({
  selector: 'app-date-section',
  templateUrl: './date-section.component.html',
  styleUrls: ['./date-section.component.scss'],
})
export class DateSectionComponent implements OnInit {
  checkIn = new Date();
  checkOut = new Date();
  subtractDates = 0;
  days = 0;
  inputEvent(event) {

    if(event.target._elementRef.nativeElement.alt == "checkIn"){
      console.log(event.value);
      this.checkIn = event.value;
      console.log(this.checkIn);
    } else if (event.target._elementRef.nativeElement.alt == "checkOut"){
      this.checkOut = event.value;
      console.log(this.checkOut);
    }
    else{
      console.log('neither')
    }
    
    // To calculate the time difference of two dates 
    this.subtractDates = this.checkOut.getTime() - this.checkIn.getTime(); 
    // To calculate the no. of days between two dates 
    this.days = this.subtractDates / (1000 * 3600 * 24); 
    console.log(this.days);
    
  }
  changeEvent(event) {
    // console.log(event.value);
  }
  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {}
  
}
