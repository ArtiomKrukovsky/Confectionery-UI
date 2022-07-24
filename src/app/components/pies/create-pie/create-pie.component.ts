import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pie',
  templateUrl: './create-pie.component.html',
  styleUrls: ['./create-pie.component.css']
})
export class CreatePieComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl;
  }

  constructor() { }

  ngOnInit() {
  }

  public submit() {
    
  }

}
