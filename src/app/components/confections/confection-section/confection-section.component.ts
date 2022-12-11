import { Component, Input, OnInit } from '@angular/core';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { IConfection } from '../api/models/confection';
import { ConfectionService } from '../services/confection.service';

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

  constructor(private confecionService: ConfectionService) {}

  ngOnInit(): void {
    this.computeSectionTitle();
  }

  private computeSectionTitle(): void {
    this.sectionTitle = this.confecionService.computeConfectionTitle(this.confectionType);
  }
}
