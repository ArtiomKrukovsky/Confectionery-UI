import { Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollingService {
    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public disable(): void {
        this.renderer.addClass(document.body, 'locked');
    }

    public enable(): void {
        this.renderer.removeClass(document.body, 'locked');
    }

    public scroll(identifier: string): void {
        const htmlComponent = document.getElementById(identifier);
        
        if(htmlComponent) {
            htmlComponent.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }
}
