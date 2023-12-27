import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {
  BehaviorSubject,
  fromEvent,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowScrollingService {
  public get scrollY(): Observable<number> {
    return this.scrollY$.asObservable();
  }

  private renderer: Renderer2;

  private scrollY$: BehaviorSubject<number>;
  private destroy$ = new Subject();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.scrollY$ = new BehaviorSubject<number>(0);

    this.onWindowScrollListener();
  }

  ngOnDestroy(): void {
    this.scrollY$.next(0);
    this.scrollY$.complete();
    this.destroy$.complete();
  }

  public scroll(identifier: string): void {
    const htmlComponent = document.getElementById(identifier);

    if (htmlComponent) {
      htmlComponent.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  public disableScrolling(): void {
    this.renderer.addClass(document.body, 'locked');
  }

  public enableScrolling(): void {
    this.renderer.removeClass(document.body, 'locked');
  }

  private onWindowScrollListener(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.scrollY$.next(window.scrollY));
  }
}
