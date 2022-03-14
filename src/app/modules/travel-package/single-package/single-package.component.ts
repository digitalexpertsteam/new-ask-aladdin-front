import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-single-package',
  templateUrl: './single-package.component.html',
  styleUrls: ['./single-package.component.css']
})
export class SinglePackageComponent implements OnInit {
  type = true
  lights: any = [];
  banener: any = [];
  contact: any = [];
  Title: any;
  Meta: any;
  id: any
  ifTrue = false
  packName: any;
  desName: any;
  desSlug: any;
  idPack: any;
  overBanner: any;
  video: any = []
  ptional:any
  ptionall:any
  reviews:any;
  image = "../../../../../assets/imgs/default-reviews.png"
  max=5;


  // player: YT.Player | undefined;
  public elementSrc = [];
  // savePlayer(player: YT.Player) {
  //   this.player = player;
  // }
  constructor(public highlights: HomeserviceService, private _active: ActivatedRoute, private _Meta: Meta, private _Title: Title, private saintizer: DomSanitizer) { }
  ngOnInit(): void {
//     window.scroll({
//       top: 0,
//       behavior: 'smooth'
// });
    this.idPack = this._active.snapshot.params.slug
    this.id = this._active.snapshot.params.id
    this.highlights.getSinglepackage(this.idPack).subscribe(result => {
      this.lights = result.data[0]
      this.banener = result.data[0]
      this.reviews = result.data[0].reviews


      this.ptional = result.data[0].optional_tours
      this.ptionall = result.data[0].optional_tours






      this.video = result.data[0].videos


      this.contact = result.data[0]
      this.Title = result.data[0].seo_title;
      this._Title.setTitle(`${this.Title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data.seo_keywords}` },
        { name: 'robots', content: `${result.data.seo_robots}` },
        { name: 'description', content: `${result.data.seo_description}` },
      ]);
      this.highlights.getOneDestinationDetails(2).subscribe(res => {
        this.packName = res.data[0].categories[1].name
        this.overBanner = result.data[0].image_over_banner;
      })
      this.highlights.getSingleDestination(this.id).subscribe(result => {
        this.desName = result.data[0]?.destination_name;
        this.desSlug = result.data[0]?.destination_slug;
      })
    })
    // video

  }

  openModel(){
    this.ifTrue = !this.ifTrue
  }
}
