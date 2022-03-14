import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-package-included',
  templateUrl: './package-included.component.html',
  styleUrls: ['./package-included.component.css']
})
export class PackageIncludedComponent implements OnInit {
  @Input() package = false ;
  @Input() excur = false ;

  includ:any = [];
  ptional:any=[];
  id:any;
  excursion: any;

  constructor(private included:HomeserviceService,private _active: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._active.snapshot.params.slug
    this.excursion = this._active.snapshot.params.excursion
if(this.package == true){
  this.included.getSinglepackage(this.id).subscribe(result => {
    this.includ = result.data[0]

})
}

if(this.excur ==true){
  this.included.getSingleExcursion(this.excursion).subscribe(result => {
    this.includ = result.data[0]


  })
}

}




}
