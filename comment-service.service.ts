import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http:HttpClient) { }


getAllComments()
{

  return this.http.get('https://jsonplaceholder.typicode.com/comments');

}

  getSpecificComments(CommentId:number) {

    return this.http.get("https://jsonplaceholder.typicode.com/comments/"+CommentId);

  }



}
