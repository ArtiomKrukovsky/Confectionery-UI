import { Component, Input, OnInit } from '@angular/core';
import { IConfection } from '../api/models/confection';
import { ConfectionType } from '../../../shared/enums/confection-type.enum';
import { ConfectionService } from '../services/confection.service';
import { NONE_NUMBER } from '../../../shared/constants/common.constants';

@Component({
  selector: 'app-confection-table',
  templateUrl: './confection-table.component.html',
  styleUrls: ['./confection-table.component.scss']
})
export class ConfectionTableComponent implements OnInit {
  @Input() confections: IConfection[] = [];
  @Input() isLoading: boolean = false;

  public noneNumber: string = NONE_NUMBER;

  constructor(private confectionService: ConfectionService) { }

  ngOnInit() {
  }

  public computeConfectionTitle(confectionType: ConfectionType): string {
    return this.confectionService.computeConfectionTitle(confectionType);
  }

  public computeCategoryClass(confectionType: ConfectionType): string {
    return `category--${ConfectionType[confectionType].toLocaleLowerCase()}`;
  }
}
