import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Input() title: string = 'Title';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public close() {
    this.modalService.close();
  }

  public open() {
    this.modalService.open();
  }
}
