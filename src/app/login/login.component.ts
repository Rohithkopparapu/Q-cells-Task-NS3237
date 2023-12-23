import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  email = new FormControl('', [Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]);
  password = new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/),Validators.minLength(8)]);
  isInputFocused: boolean = false;
  
  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }
 
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    })
  }
  onSubmit(myForm:FormGroup)
  {

  }
 
}
