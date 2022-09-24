import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public companyLogo: string = "https://pekarni.by/wp-content/uploads/2021/05/logo235x60c.png"

  constructor() { }

  ngOnInit() {
  }

}
