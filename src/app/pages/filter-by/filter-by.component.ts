import { Component, enableProdMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singleDestination } from '../../interfaces/single-destination';
import { HomeserviceService } from '../../services/homeservice.service';
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit {
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  id: any;
  idpackage: any
  nameCountry = '';
  destinationContainer: singleDestination[] = []
// ng

  employees: singleDestination[] = [];
  selectedEmployees:  singleDestination[] = []
  tableTitles: string[] = ['First Name', 'Last Name', 'Birth Year', 'City', 'Title'];

  onValueChanged(e:any) {
      let selectedEmployees: any[] = [];
    
      this.employees.forEach((item, index) => {
          if (item.start_price >= e.value[0] && item.start_price <= e.value[1]) {
              selectedEmployees.push(item);
              console.log(item);
              
          }
      });
    
      this.selectedEmployees = selectedEmployees;
  }

  
  constructor(private _singleDes: HomeserviceService,    private _active: ActivatedRoute,) { 
  }
  
  ngOnInit(): void {
    this.id = this._active.snapshot.params.slug

    
    this._singleDes.getSingleDestination(this.id).subscribe(result => {
      this.employees = result.data[0].start_price
      this.selectedEmployees = this.employees;

      console.log( this.destinationContainer );
  })}

}
