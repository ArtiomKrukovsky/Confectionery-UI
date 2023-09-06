import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuOpened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public openBurgerMenu(): void {
    // if (this.isMenuOpened) {
    //   this.windowScrollingSerive.enableScrolling();
    // } else {
    //   this.windowScrollingSerive.disableScrolling();
    // }

    this.isMenuOpened = !this.isMenuOpened;
  }
}
