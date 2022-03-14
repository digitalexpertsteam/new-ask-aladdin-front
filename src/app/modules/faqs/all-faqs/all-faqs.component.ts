import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destination } from 'src/app/core/interfaces/destination';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-faqs',
  templateUrl: './all-faqs.component.html',
  styleUrls: ['./all-faqs.component.css']
})
export class AllFaqsComponent implements OnInit {

  faqNames: destination[] = [];
  faqContent: any = [];
  id: any;
  constructor(private _destinationPack: HomeserviceService ,private active:ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.active.snapshot.params.id
    this._destinationPack
      .getAlldestination()
      .subscribe((result) => (this.faqNames = result.data));
    this._destinationPack.getOneDestinationDetails(5).subscribe((res) => {
      this.faqContent = res.data[0].categories[5];
    });
  }



}
