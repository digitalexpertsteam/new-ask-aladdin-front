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
  faqContent:any = []
  id:any;
  constructor(private _destinationPack: HomeserviceService) { }
  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this._destinationPack.getAlldestination().subscribe(result => this.faqNames = result.data)
    this._destinationPack.getOneDestinationDetails(this.id).subscribe(res => {
      this.faqContent = res.data[0].categories[6]
  })}


  setId(id:any){
    localStorage.setItem("id" , id)
  }
}


