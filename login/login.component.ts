
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private CryptGenerated:string;
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.messageForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;

    console.log(this.messageForm.controls.email.value);
    console.log(this.messageForm.controls.password.value);

  // let  md5 = new Md5();

  //   Md5.hashStr('blah blah blah');
  //   console.log(Md5.hashStr('blah blah blah'));
// this.messageForm.controls.email.value




    localStorage.setItem('_token', this.CryptGenerated);
    this.router.navigate(['/Dash']);
    // Home


  }

  ngOnInit() {
 

    
    this.CryptGenerated = this.CryaptRandom();
    
    // console.log(this.CryptGenerated);
  }


  CryaptRandom()
  {

    return Math.random().toString(20).replace('0.', '') 
    + Math.random().toString(20).replace('0.', '') + 
    Math.random().toString(20).replace('0.', '');

  }



}
