import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public getImageUrl(extension: string, content: string): SafeUrl {
    let objectURL = `data:${ extension };base64,${ content }`;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
