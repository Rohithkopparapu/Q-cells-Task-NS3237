import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  

  myForgotForm!: FormGroup;
  email = new FormControl('', [Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]);
  isInputFocused: boolean = false;
  ispasswordFocused:boolean=false;
  showPassword=false;
  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }
  onInputFocus1() {
    this.ispasswordFocused = true;
  }

  onInputBlur1() {
    this.ispasswordFocused = false;
  }
  constructor(private builder:FormBuilder){}
  ngOnInit(): void {
    this.myForgotForm=this.builder.group({
      email:this.email
    })
   }
   onsubmit(myForm:FormGroup)
   {

   }
}
