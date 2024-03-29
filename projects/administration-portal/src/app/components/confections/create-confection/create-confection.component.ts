import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfectionService } from '../services/confection.service';
import { PopupService } from '../../../services/popup.service';
import { IConfection } from '../api/models/confection';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';

@Component({
  selector: 'app-create-confection',
  templateUrl: './create-confection.component.html',
  styleUrls: ['./create-confection.component.scss'],
})
export class CreateConfectionComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(150),
      Validators.maxLength(450),
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000),
    ]),
    confectionType: new FormControl<ConfectionType>(ConfectionType.Default, [
      Validators.required,
    ]),
    imageUrl: new FormControl<string>('', [Validators.required]),
  });

  public get title() {
    return this.form.controls.title as FormControl;
  }

  public get description() {
    return this.form.controls.description as FormControl;
  }

  public get price() {
    return this.form.controls.price as FormControl;
  }

  public get confectionType() {
    return this.form.controls.confectionType as FormControl;
  }

  public get imageUrl() {
    return this.form.controls.imageUrl as FormControl;
  }

  constructor(
    private confectionService: ConfectionService,
    private popupService: PopupService
  ) {}

  ngOnInit() {}

  public submit() {
    let confection: IConfection = {
      name: this.form.value.title as string,
      description: this.form.value.description as string,
      price: 200,
      weight: 1100,
      confectionType: this.confectionType.value as ConfectionType,
      isOrderCountLimited: false,
      minimumOrderCount: 1,
      isOutOfStock: false,
      pictures: [
        {
          id: 'aec32681-ff1f-4bf6-ae40-fc704ca0172a',
          shortName: 'N/A Cake',
          url: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg',
        },
      ],
    };

    this.confectionService.saveConfection(confection);
    this.popupService.close();
  }
}
