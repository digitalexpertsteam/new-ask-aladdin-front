import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-categorey-footer',
  templateUrl: './categorey-footer.component.html',
  styleUrls: ['./categorey-footer.component.css']
})
export class CategoreyFooterComponent implements OnInit {
  categoryFooter:Category[]=[] 
  constructor(private footer:HomeserviceService) { }

  ngOnInit(): void {
    this.footer.categoryFooter(1).subscribe(res => {
      this.categoryFooter = res.data
      console.log(res.data);
      
    })
  }

}
  