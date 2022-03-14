import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-url',
  templateUrl: './redirect-url.component.html',
  styleUrls: ['./redirect-url.component.css']
})
export class RedirectUrlComponent implements OnInit {

  constructor(private router:Router) {
    window.location.href = 'https://new.ask-aladdin.com/sitebackend/login';
  }

  ngOnInit(): void {
  }

}
