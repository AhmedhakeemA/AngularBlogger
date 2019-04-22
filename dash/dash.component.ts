import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  private toggelValue:boolean=true;
  constructor(private router: Router) { }

  ngOnInit() {

    console.log(localStorage.getItem('_token'));

    if (localStorage.getItem('_token').toString() == '') {
      this.router.navigate(['/login']);
    }

    //  localStorage.setItem('_token','');

  }


  toggler(){
    this.toggelValue = !this.toggelValue;
  }

}
