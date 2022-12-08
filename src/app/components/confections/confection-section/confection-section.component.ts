import { Component, Input, OnInit } from '@angular/core';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { ConfectionTitlesByTypeMap } from 'src/app/shared/maps/confection-type.map';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-section',
  templateUrl: './confection-section.component.html',
  styleUrls: ['./confection-section.component.scss']
})
export class ConfectionSectionComponent implements OnInit {
  @Input() confectionType: ConfectionType;
  @Input() confections: IConfection[];

  public sectionTitle: string;

  //public term: string = '';

  constructor() {}

  ngOnInit(): void {
    this.sectionTitle = this.computeConfectionTitle();
  }

  private computeConfectionTitle(): string {
    return ConfectionTitlesByTypeMap.get(this.confectionType);
  }
}
