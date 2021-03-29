import { Component, OnInit } from '@angular/core';
import { destination } from '../../interfaces/destination';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-all-packages-destination',
  templateUrl: './all-packages-destination.component.html',
  styleUrls: ['./all-packages-destination.component.css']
})
export class AllPackagesDestinationComponent implements OnInit {

  packagesNames: destination[] = [];
  packageContent:any ;
  id:any;
  constructor(private _destinationPack: HomeserviceService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this._destinationPack.getAlldestination().subscribe(result => this.packagesNames = result.data)
    this._destinationPack.getOneDestinationDetails(this.id).subscribe(res => {
      this.packageContent = res.data[0].categories[1]
      console.log(this.packageContent);
      
    })

  }
  setId(id:any){
    localStorage.setItem("id" , id)
  }
}