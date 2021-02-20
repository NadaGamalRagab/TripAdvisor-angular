import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-section',
  templateUrl: './date-section.component.html',
  styleUrls: ['./date-section.component.scss'],
})
export class DateSectionComponent implements OnInit {
  minDate = new Date(2021, 1, 17);
  maxDate = new Date(2025, 11, 31);

  inputEvent(event) {
    console.log(event.value);
  }
  changeEvent(event) {
    console.log(event.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
