import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {

  private userData:any[]=[];
  private Pages: number[] = [1, 2,3]; 

  constructor(private UserServiceService: UserServiceService) {}

  ngOnInit() {


    this.UserServiceService.getAllusers().subscribe((res:any[])=>{

      this.userData=res;
      console.log(res);

    }, (error) => { console.log('error getting Data' + error);}
    
    );

  }





}
