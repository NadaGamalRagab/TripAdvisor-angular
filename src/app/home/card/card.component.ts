import { Component, OnInit,Input } from '@angular/core';
import {Home} from '../../_model/home'
import {HomeService} from '../../_services/home.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() home:Home;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
