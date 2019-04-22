import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }


  

getAllusers()
{

  return this.http.get("https://jsonplaceholder.typicode.com/users");

}


}
