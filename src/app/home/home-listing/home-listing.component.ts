import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef ,NgModule,Renderer2} from '@angular/core';
import {Home} from "../../_model/home/home";
import {HomeService} from "../../_services/home/home.service";
import {DreamTripService} from "../../_services/home/dream-trip.service";
import {DreamTripCards} from '../../_model/home/dreamTrip';
import {MoreExploreService} from "../../_services/home/more-explore.service";
import {MoreToExplore} from '../../_model/home/more-explore'



@Component({
  selector: 'app-home-listing',
  templateUrl: './home-listing.component.html',
  styleUrls: ['./home-listing.component.scss']
})
export class HomeListingComponent implements OnInit {
   dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

   top : DreamTripCards[];
   headlines : MoreToExplore[];
   cards:Home[];
   isToggel=false;
   search:string[] =[];
   current:0;
   size:2;
   slides: any = [[]];

  constructor(private renderer: Renderer2,
    private dreamTripSerivce:DreamTripService,
    private moreExploreSerivce:MoreExploreService,
    private homeService:HomeService) { }

  ngOnInit() {
     this.top=this.dreamTripSerivce.getTop();
     this.headlines=this.moreExploreSerivce.getHeadline();
      this.cards=this.homeService.getCard();
      this.slides = this.chunk(this.cards, 4);

  }

  myFunction(){
    this.isToggel= !(this.isToggel)
    console.log("hellooooo")
    return this.isToggel;
}
    
/*  getSlicedProducts():Home[]{
  const start= this.current* this.size;
  
  return this.cards.slice(start,start+this.size);
  
}  */

// onSearchHandler(searchInput){
//   console.log(searchInput.value);
//   this.search.push(searchInput.value);
//   console.log(this.search)
//     return this.search;
// }

timeout: any = null;

 onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode == 13) {
        $this.executeListing(event.target.value);
      }
    }, 1);
  }

 executeListing(value: string) {
    // alert(value);
    console.log(value)
    if (value !== ''){
      this.search.push(value);
    }
  }

chunk(arr: any, chunkSize: number) {
  let R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    R.push(arr.slice(i, i + chunkSize));
  }
  return R;
}
ngAfterViewInit() {
  const buttons = document.querySelectorAll('.btn-floating');
  buttons.forEach((el: any) => {
    this.renderer.removeClass(el, 'btn-floating');
    this.renderer.addClass(el, 'px-3');
    this.renderer.addClass(el.firstElementChild, 'fa-3x');
  });
}

  }
