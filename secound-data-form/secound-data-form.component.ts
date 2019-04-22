import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secound-data-form',
  templateUrl: './secound-data-form.component.html',
  styleUrls: ['./secound-data-form.component.css']
})
export class SecoundDataFormComponent implements OnInit {

  UploaderFrom:FormGroup;
  submitted = false;
  success = false;
  showAlert = false;
  resData:any;
  selecetdFile: File;

  constructor(private formBuilder:FormBuilder ,private http:HttpClient) {

    this.UploaderFrom=this.formBuilder.group({
      ImageFile:['',[Validators.required]]
    })

   }

  namex:string;


  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.namex=event.target.files[0].name;
      this.selecetdFile = event.target.files[0];
    }
  }

 onSubmit(){

   const uploadFormData = new FormData();
   uploadFormData.append('file', this.selecetdFile,this.selecetdFile.name);

   this.submitted = true;

   if (this.UploaderFrom.invalid) {
     return;
   }

   this.success = true;
   console.log(this.UploaderFrom.controls.ImageFile.value);
   console.log(this.selecetdFile);
   let pos = this.http.post(
     "https://jsonplaceholder.typicode.com/photos",
     uploadFormData
   );

pos.subscribe((res)=>{

  this.resData=res;
  this.showAlert=true;
  console.log('Got Some Data From BackEnd',res);
},(error)=>{
    console.log('Error !', error);
});

 }

  ngOnInit() {
  }

}
