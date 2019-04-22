import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private response: any[];
  constructor(private http: HttpClient) { }


  getAlbums(){
   
   return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }


  getAlbumsPaging(Page:number) {

    return this.http.get('https://jsonplaceholder.typicode.com/albums?_page='+Page);

  }
}
