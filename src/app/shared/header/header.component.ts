import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLang:string='';
  Languages = [
  {lnaguage:"English" ,image:"assets/imgs/en.png"},
  {lnaguage:"French" , image:"assets/imgs/fr.png"},
  {lnaguage:"Spanish" , image:"assets/imgs/es.png"},
  {lnaguage:"German" , image:"assets/imgs/de.png"},
  {lnaguage:"Russian" , image:"assets/imgs/ru.png"},


]

  textLang='';
  imgLang ='';



  constructor(public translate: TranslateService) { 
    this.currentLang=localStorage.getItem('currentLang') ||'en';
    this.translate.use(this.currentLang);
  }


  ngOnInit(): void {}

  changeCurrentLang( lang:any , i:any )
{
 this.Languages.forEach(data => {
   
 })
  
  this.translate.use(lang);
  localStorage.setItem('currentLang',lang);
  this.textLang = i.text 
  console.log(this.imgLang);
  location.reload();

  
}



}

