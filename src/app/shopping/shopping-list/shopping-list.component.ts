import { Component, Input, OnInit } from '@angular/core';
import { Shopping } from 'src/app/_model/shopping';
import { ShoppingService } from 'src/app/_services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() shopping:Shopping;
  constructor(private shoppingservice : ShoppingService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
  }
}
