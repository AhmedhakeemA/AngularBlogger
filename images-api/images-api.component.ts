import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ServiceApiService } from '../service-api.service';


@Component({
  selector: 'app-images-api',
  templateUrl: './images-api.component.html',
  styleUrls: ['./images-api.component.css']
})
export class ImagesAPiComponent implements OnInit {

  public Images: any[] = [];
  private Albums: any[] = [];
  private Pages: number[] = [1, 2, 3]; 
  private AlbumID: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private rou: Router, private fetchImages: ServiceApiService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.AlbumID = params;

    }

    );


  }

  ngOnInit() {

    this.fetchImages.getImageByAlbum(this.AlbumID.id).subscribe((respo:any[]) => {

      // console.log(respo);
      this.Images=respo;
      console.log(this.Images);
    });
   
    
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
