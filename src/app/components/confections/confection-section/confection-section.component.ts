import { Component, Input, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';

@Component({
  selector: 'app-confection-section',
  templateUrl: './confection-section.component.html',
  styleUrls: ['./confection-section.component.scss']
})
export class ConfectionSectionComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() confections: IConfection[];

  //public term: string = '';

  constructor() {}

  ngOnInit() {}
}
