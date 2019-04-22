import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstdata-form',
  templateUrl: './firstdata-form.component.html',
  styleUrls: ['./firstdata-form.component.css']
})
export class FirstdataFormComponent implements OnInit {

  postForm:FormGroup;
  submitted = false;
  success = false;

  MessageResponse:string='';



  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 

    this.postForm = this.formBuilder.group({
      bodyPost: ['', [Validators.required, Validators.minLength(100)]],
      headerPost: ['', [Validators.required]]
    })


  }

  onSubmit() {
    this.submitted = true;

    if (this.postForm.invalid) {
      return;
    }

    this.success = true;

    console.log(this.postForm.controls.bodyPost.value);
    console.log(this.postForm.controls.headerPost.value);




    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: this.postForm.controls.headerPost.value,
      body: this.postForm.controls.bodyPost.value,
      userId: 1
    }).subscribe(
      (res: any[]) => {
  // MessageResponseShow:boolean=false;
        console.log(res);
    
          this.MessageResponse='Post Successfully'
            this.postForm.reset();
      },
      (error) => {

        console.log('Error !', error);
      }
    );


    
  }





  ngOnInit() {
   
  }

}
