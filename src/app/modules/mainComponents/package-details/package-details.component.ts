import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { singleDestination } from '../../../interfaces/single-destination';
import { HomeserviceService } from '../../../services/homeservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  encapsulation: ViewEncapsulation.None,


  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]


})
export class PackageDetailsComponent implements OnInit {


  max = 5;
  rate = 3;
  isReadonly = false;
  // duration_in_days;
  num: any;
  night: singleDestination[] = [];
  x = 1;
  overStar: number | undefined;
  percent: number | undefined;
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
  id: any;
  des: any;
  idpackage: any
  destinationContainer: singleDestination[] = []
  resetStar(): void {
    this.overStar = void 0;
  }
  constructor(private _singleDes: HomeserviceService, private sanitizer: DomSanitizer, private modalService: NgbModal) {

  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


  ngOnInit(): void {
    this.id = localStorage.getItem("id")

    
    this._singleDes.getSingleDestination(this.id).subscribe(result => {
      this.destinationContainer = result.data
    })
    this._singleDes.getSingleDestination(this.id).subscribe(result => {
      this.des = result.data
 
    })
  }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  setId(id: any) {
    localStorage.setItem('idPack', id)


  }

}


