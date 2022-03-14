import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { destination } from 'src/app/core/interfaces/destination';
import { destinationBlog } from 'src/app/core/interfaces/destinationBlog';
import { HomeserviceService } from 'src/app/core/services/homeservice.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {
  blogContainer:destinationBlog[] = [];
  blog_name: any;
  blogName:any;
  blogBanner: string = `../../../assets/imgs/5b14a68e3de5a.jpg`
  blogDes: string = '';
  desName: string = '';
  desSlug: string ='';
  category: string = '';
  title!: String;
  id:any;
  allBlog:destination[]=[];
  phone: any;



  constructor(private _blogs:HomeserviceService , private _active:ActivatedRoute, private _Meta : Meta , private _Title : Title ) {


   }

  ngOnInit(): void {
    // this.id = this._active.snapshot.params.slug
    // console.log(this._active.snapshot.params.slug);

    this._blogs.getSocials().subscribe((result) => {
      this.phone = result.data[0].phone1
    });

    this.id = this._active.snapshot.params.slug

    this._blogs.getDestinationBlogs(this.id).subscribe(result => {
      this.blogContainer = result.data
      this.blog_name = result.data[0].destination_name + " Blogs";
      this.blogDes = result.data[0].destination_description;
      this.desName = result.data[0].destination_name;
      this.desSlug = result.data[0].destination_slug;
      this.title = result.data[0].destination_seo_title;
      this._Title.setTitle(`${this.title}`)
      this._Meta.addTags([
        { name: 'keywords', content: `${result.data[0].destination_seo_keywords}` },
	      { name: 'robots', content: `${result.data[0].destination_seo_robots}` },
        { name: 'description', content: `${result.data[0].destination_seo_description}` },
        { name: 'facebook:description', content: `${result.data[0].destination_facebook_description}` },
        { name: 'twitter:title', content: `${result.data[0].destination_twitter_title}` },
        { name: 'twitter:description', content: `${result.data[0].destination_twitter_description}` },
        { name: 'twitter:image', property:"og:image", content: `${result.data[0].destination_twitter_image}` },
        { name: 'facebook:image', property:"og:image", content: `${result.data[0].destination_facebook_image}` },

      ]);
    })

    this._blogs.getOneDestinationDetails(1).subscribe(res => {
        this.allBlog = res.data[0].categories
        this.category = res.data[0].categories[4].slug
        this.blogName = res.data[0].categories[4].name
    })

    }

  }



