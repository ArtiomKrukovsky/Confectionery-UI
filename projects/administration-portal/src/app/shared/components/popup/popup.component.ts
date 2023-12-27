import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() title: string = 'Title';

  constructor(private popupService: PopupService) {}

  ngOnInit() {}

  public close() {
    this.popupService.close();
  }
}
