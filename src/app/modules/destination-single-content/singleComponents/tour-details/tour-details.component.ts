import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../../../../services/homeservice.service';
@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  lights: any = [];
  banener: any = [];
  contact: any = [];
  Title: any;
  Meta: any;
  id: any
  packName: any;
  desName: any;
  desSlug: any;
  idPack: any;
  overBanner: any;
  video: any = []
  player: YT.Player | undefined;
  public iid: any[] = [];
  savePlayer(player: YT.Player) {
    this.player = player;
    console.log("player instance", player);
  }
  onStateChange(event: any) {
    console.log("player state", event.data);
  }
  constructor(public highlights: HomeserviceService, private _active: ActivatedRoute, private _Meta: Meta, private _Title: Title,) { }
  ngOnInit(): void {
    this.idPack = this._active.snapshot.params.slug
    this.id = this._active.snapshot.params.id
    this.highlights.getSinglepackage(this.idPack).subscribe(result => {
      this.lights = result.data[0]
      this.banener = result.data[0]
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
        this.desName = result.data[0].destination_name;
        this.desSlug = result.data[0].destination_slug;
      })
    })
    // video
    this.video.forEach((ele: any) => {
      this.iid.push({
        ele
      }
      )
    })
  }
}