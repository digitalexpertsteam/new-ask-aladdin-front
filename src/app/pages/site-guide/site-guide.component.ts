import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-site-guide',
  templateUrl: './site-guide.component.html',
  styleUrls: ['./site-guide.component.css']
})
export class SiteGuideComponent implements OnInit {



  constructor(private site_guide:HomeserviceService) { 
    

  }

  ngOnInit(): void {

    
    

      
    
  }
  
}
