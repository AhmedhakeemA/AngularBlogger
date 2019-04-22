import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http:HttpClient) { }



getImages()
{
  return this.http.get('https://jsonplaceholder.typicode.com/photos');

}


getImageByAlbum(albumId:number){


  return this.http.get(
    "https://jsonplaceholder.typicode.com/photos?albumId="+albumId
  );
}


}
