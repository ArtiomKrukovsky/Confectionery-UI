import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: Record<string, string>;

  private build(): void {
    //this.api[''] = ``;
  }

  constructor() { 
    this.build();
  }

  public getApiUrl(
    api: string, 
    routeParams?: object, 
    queryParams?: object
  ): string {
    // todo: add proccesing with params
    return `${environment.apiUrl}${api}`;
  }
}
