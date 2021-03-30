import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-all-faq-destination',
  templateUrl: './all-faq-destination.component.html',
  styleUrls: ['./all-faq-destination.component.css']
})
export class AllFaqDestinationComponent implements OnInit {
  faqNames: destination[] = [];
  faqContent:any;
  constructor(private _destinationPack: HomeserviceService) { }

  ngOnInit(): void {
    this._destinationPack.getAlldestination().subscribe(result => this.faqNames = result.data)
    this._destinationPack.getOneDestinationContent().subscribe(res => {
      this.faqContent = res.data[0].page_content[5]
      console.log(this.faqContent);
  })}


  setId(id:any){
    localStorage.setItem("id" , id)
  }
}


