import { Component, OnInit } from '@angular/core';
// import { Cruise } from '../_model/cruise';
import { Cruise } from '../../_model/criuses/cruise';
import { CruiseService } from '../../_services/cruise/cruise.service';
// import { CruiseService } from '../_services/cruise.service';
// import{CruiseDealsComponent} from '../cruise-deals/cruise-deals.component'
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cruises',
  templateUrl: './cruises.component.html',
  styleUrls: ['./cruises.component.scss']
})
export class CruisesComponent implements OnInit {
  cruise : Cruise[]=[];
  // numberOfCruises : number[] = [];
  pageSize : number = 4;
  minDate = new Date(2021, 1, 17); 
  maxDate = new Date(2025, 11, 31);
  constructor(private cruiseService:CruiseService) { }

  ngOnInit(): void {
    this.cruise =  this.cruiseService.getAllCruises();
    // this.cruise =  this.cruiseService.getAllCruises().slice();
  }

  getCruiseSlice() {
    return this.cruise.slice(0,this.pageSize)
  }
  
  inputEvent(event){
    console.log(event.value);
}
changeEvent(event){
    console.log(event.value);
}
  
}

