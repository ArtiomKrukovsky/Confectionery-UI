import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowScrollingService } from 'src/app/services/window-scrolling.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public companyLogo: string = "https://pekarni.by/wp-content/uploads/2021/05/logo235x60c.png"
  public isMenuOpened: boolean = false;

  constructor(
    private router: Router, 
    private windowScrollingSerive: WindowScrollingService
  ) { }

  ngOnInit() {
  }

  public redirectToPage(redirectUrl: string) : void {
    if (this.isMenuOpened) {
      this.isMenuOpened = false;
    }

    this.router.navigateByUrl(redirectUrl);
    this.windowScrollingSerive.enableScrolling();
  }

  public openBurgerMenu(): void {
    if (this.isMenuOpened) {
      this.windowScrollingSerive.enableScrolling();
    } else {
      this.windowScrollingSerive.disableScrolling();
    }

    this.isMenuOpened = !this.isMenuOpened;
  }
}
