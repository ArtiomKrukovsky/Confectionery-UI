import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Observable, of } from 'rxjs';
import { IConfection } from './models/confection';
import { CONFECTION_URL, endpoints } from '../../../shared/constants/api.constants';
import { environment } from 'src/environments/environment';
import { CONFECTIONS } from '../../../core/mocks/confections';

@Injectable({
  providedIn: 'root'
})
export class ConfectionApi {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  public getAllConfection(): Observable<IConfection[]> {
    const url = this.apiService.getApiUrl(endpoints.confection.getConfections);
    return this.httpClient.get<IConfection[]>(url);
    //return of(CONFECTIONS);
  }

  public getConfection(id: number) : Observable<IConfection> {
    const url = `${environment.apiUrl}${CONFECTION_URL}/${id}`;
    return this.httpClient.get<IConfection>(url)
  }
}
