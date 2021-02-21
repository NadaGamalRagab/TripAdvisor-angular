import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/_model/recommendation';
import { Types } from 'src/app/_model/types';
import { RecommendationService } from 'src/app/_services/recommendation.service';
import { TypesService } from 'src/app/_services/types.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
  recommendation: Recommendation[]
  types: Types[]
  constructor(private recommendationservice: RecommendationService, private typeservice: TypesService) { }

  ngOnInit(): void {
    this.types = this.typeservice.getAlltypes(),
      this.recommendation = this.recommendationservice.getAllrecomend()
  }

}
