import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-push-comment',
  templateUrl: './push-comment.component.html',
  styleUrls: ['./push-comment.component.css']
})
export class PushCommentComponent implements OnInit {

  CommentForm: FormGroup;
  submitted = false;
  success = false;

  MessageResponse: string = '';



  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    this.CommentForm = this.formBuilder.group({
      bodyComment: ["", [Validators.required, Validators.minLength(100)]],
      email: ["", [Validators.required, Validators.email]],
      nameComment: ["", [Validators.required]]
    });


  }

  onSubmit() {
    this.submitted = true;

    if (this.CommentForm.invalid) {
      return;
    }

    this.success = true;

    // console.log(this.CommentForm.controls.bodyComment.value);
    // console.log(this.CommentForm.controls.nameComment.value);
    // console.log(this.CommentForm.controls.email.value);




    this.http
      .post("https://jsonplaceholder.typicode.com/comments", {
        title: this.CommentForm.controls.nameComment.value,
        body: this.CommentForm.controls.bodyComment.value,
        email: this.CommentForm.controls.email.value,
        userId: 1
      })
      .subscribe(
        (res: any[]) => {
          // MessageResponseShow:boolean=false;
          console.log(res);

          this.MessageResponse = "Comment Successfully";
          this.CommentForm.reset();
        },
        error => {
          console.log("Error !", error);
        }
      );



  }




  ngOnInit() {
  }

}
