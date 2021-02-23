import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cruise } from '../../_model/criuses/cruise';
// import { Cruise } from '../_model/cruise';
// import { CruiseService } from '../_services/cruise.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cruise-deals',
  templateUrl: './cruise-deals.component.html',
  styleUrls: ['./cruise-deals.component.scss']
})
export class CruiseDealsComponent implements OnInit {
  // cruise : Cruise[] =[];
  @Input() cruise: Cruise;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // })
    ;
  }


}
