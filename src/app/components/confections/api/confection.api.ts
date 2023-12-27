import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConfection } from './models/confection/confection';

import { IConfectionMapping } from './models/confection/confection-mapping';
import {
  CONFECTION_URL,
  endpoints,
} from 'src/app/shared/constants/api.constants';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class ConfectionApi {
  constructor(
      private httpClient: HttpClient,
      private apiService: ApiService
  ) { }

  public getAllConfectionMappings(): Observable<IConfectionMapping[]> {
    const url = this.apiService.getApiUrl(endpoints.confection.getConfetionMappings);
    return this.httpClient.get<IConfectionMapping[]>(url);
  }

  public getAllConfections(): Observable<IConfection[]> {
    const url = this.apiService.getApiUrl(endpoints.confection.getConfetions);
    return this.httpClient.get<IConfection[]>(url);
  }

  public getConfection(id: string): Observable<IConfection> {
    // todo: add queries and params
    const url = `${environment.apiUrl}${CONFECTION_URL}/${id}`;
    return this.httpClient.get<IConfection>(url);
  }
}