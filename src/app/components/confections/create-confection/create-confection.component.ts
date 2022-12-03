import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupService } from 'src/app/services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

@Component({
  selector: 'app-create-confection',
  templateUrl: './create-confection.component.html',
  styleUrls: ['./create-confection.component.scss']
})
export class CreateConfectionComponent implements OnInit {

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
    private confectionService: ConfectionService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
  }

  public submit() {
    let confection: IConfection = {
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

    this.confectionService.saveConfection(confection);
    this.popupService.close();
  }
}
