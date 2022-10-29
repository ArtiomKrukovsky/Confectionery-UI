import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupService } from 'src/app/services/popup.service';
import { IPie } from '../api/models/pie';
import { PieService } from '../services/pie.service';

@Component({
  selector: 'app-create-pie',
  templateUrl: './create-pie.component.html',
  styleUrls: ['./create-pie.component.scss']
})
export class CreatePieComponent implements OnInit {

  public form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(150),
      Validators.maxLength(450)
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000)
    ]),
    imageUrl: new FormControl<string>('', [
      Validators.required
    ])
  })

  public get title() {
    return this.form.controls.title as FormControl;
  }

  public get description() {
    return this.form.controls.description as FormControl
  }

  public get price() {
    return this.form.controls.price as FormControl
  }

  public get imageUrl() {
    return this.form.controls.imageUrl as FormControl
  }

  constructor(
    private pieService: PieService,
    private popupService: PopupService
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
    this.popupService.close();
  }
}
