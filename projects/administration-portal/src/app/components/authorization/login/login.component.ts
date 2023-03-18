import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl<string>("", [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl<string>("", [
      Validators.required, 
      Validators.minLength(6)
    ])
  })

  public get email() {
    return this.form.controls.email as FormControl;
  }

  public get password() {
    return this.form.controls.password as FormControl;
  }

  constructor() { }

  ngOnInit() {
  }

  public authorize(): void {

  }

}
