import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowScrollingService } from 'src/app/services/window-scrolling.service';
import { DEFAULT_PAGE_SIZE } from '../../constants/common.constants';

@Component({
  selector: 'app-scroll-sidebar',
  templateUrl: './scroll-sidebar.component.html',
  styleUrls: ['./scroll-sidebar.component.scss']
})
export class ScrollSidebarComponent implements OnInit {
  public scrollY: number;
  public readonly pageHeight = DEFAULT_PAGE_SIZE;

  private subscriptions$: Subscription;

  constructor(private windowScrollingService: WindowScrollingService) {
    this.subscriptions$ = new Subscription();
    this.subscribeToServices();
  }

  ngOnInit() {}

  public scrollToTop(): void {
    this.windowScrollingService.scrollToTop();
  }

  private subscribeToServices() {
    this.subscriptions$.add(this.windowScrollingService.scrollY.subscribe(scrollY => this.scrollY = scrollY));
  }
}
