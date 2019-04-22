import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private TodoList:any[];
  constructor(private HTTP:HttpClient) { }

  ngOnInit() {


    this.HTTP.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      (res: any[]) => {
        this.TodoList = res;

        console.log(this.TodoList);
      },
      error => {
        console.log(error);
      }
    );

  }

}
