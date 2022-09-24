import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-create-pie',
  templateUrl: './create-pie.component.html',
  styleUrls: ['./create-pie.component.css']
})
export class CreatePieComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(250)
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(10000)
    ]),
    imageUrl: new FormControl<string>('', [
      Validators.required
    ])
  })

  get title() {
    return this.form.controls.title as FormControl;
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  get price() {
    return this.form.controls.price as FormControl
  }

  get imageUrl() {
    return this.form.controls.imageUrl as FormControl
  }

  constructor(
    private pieService: PieService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  public submit() {
    let pie: IPie = {
      name: this.form.value.title as string,
      description: this.form.value.description as string,
      price: 200,
      imageUrl: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg',
      maximumPortions: 7,
      minimumPortions: 10,
      ingredients: [{
        name: 'strawberry',
        isAllergen: true,
        relativeAmount: 1.0
      }]
    }

    this.pieService.savePie(pie);
    this.modalService.close();
  }
}
