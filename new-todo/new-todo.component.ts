import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new-todo",
  templateUrl: "./new-todo.component.html",
  styleUrls: ["./new-todo.component.css"]
})
export class NewTodoComponent implements OnInit {
  private userData: any[];
  private Status: any[] = ["true", "false"];
  todoForm: FormGroup;
  submitted = false;
  success = false;

  MessageResponse: string = "";

  constructor(private HTTP: HttpClient, private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      titletodo: ["", [Validators.required, Validators.minLength(20)]],
      user: ["", [Validators.required]],
      Status: ["", [Validators.required]]
    });
  }

  ngOnInit() {
    this.HTTP.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (res: any[]) => {
        this.userData = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){

    this.submitted = true;

    if (this.todoForm.invalid) {
      return;
    }

    this.success = true;
    console.log(this.todoForm.controls.user.value);
    console.log(this.todoForm.controls.titletodo.value);
    console.log(this.todoForm.controls.Status.value);




    this.HTTP.post("https://jsonplaceholder.typicode.com/todos", {
      userId: this.todoForm.controls.user.value,
      title: this.todoForm.controls.titletodo.value,
      completed: this.todoForm.controls.Status.value
    }).subscribe(
      (res: any[]) => {
        // MessageResponseShow:boolean=false;
        console.log(res);

        this.MessageResponse = "Post Successfully";
        this.todoForm.reset();
      },
      error => {
        console.log("Error !", error);
      }
    );


  }
}
