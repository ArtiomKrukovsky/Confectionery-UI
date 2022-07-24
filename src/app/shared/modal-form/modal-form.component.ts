import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Input() title: string = 'Title';

  constructor() { }

  ngOnInit() {
  }

}
