import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuOpened: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateTo(routerLink: string, fragment: string = ''): void {
    if (this.isMenuOpened) {
      this.isMenuOpened = false;
    }

    this.router.navigate([routerLink], { fragment });
  }

  public openBurgerMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
