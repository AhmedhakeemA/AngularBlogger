import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../albums.service";
import { ServiceApiService } from '../service-api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {

private Albums:any[]=[];
private Albumsx:any[]=[];
private Pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

   i:number = 0;
  private loading = true;

  constructor(private serv: AlbumsService,private servx:ServiceApiService,private http:HttpClient,private router:Router) {}

  ngOnInit() {


        this.Pages.forEach((element) => {
        this.serv.getAlbumsPaging(element).subscribe((Response: any[]) => {
     
            this.Albums = Response;

          this.Albums.forEach(elementx => {

            // console.log(elementx.id);
            this.http.get("https://jsonplaceholder.typicode.com/photos?albumId=" + elementx.id).subscribe(res => {
             // console.log(res[0].thumbnailUrl);
              console.log({ Album: elementx, firstImage: res[0].thumbnailUrl });
              this.Albumsx.push( { Album: elementx, firstImage: res[0].thumbnailUrl });
               // this.Albums = { Album: this.elementx, firstImage: res[0].thumbnailUrl}

              this.loading = false;
              });  


            // if (this.Albumsx === undefined || this.Albumsx.length == 0) {
            //   this.router.navigate["Dash/errorPage"];
            // }

     

          }); //albums loop

        }); //service  getAlbumsPaging
    }); //Page loop

  
  }



  onSearch(params: string) {
    this.router.navigate(["Dash/albums", params]); (1)
    // this.router.navigate(['Dash/comment']); 
  }
}
