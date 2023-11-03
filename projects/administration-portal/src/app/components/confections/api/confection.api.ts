import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';
import { Observable } from 'rxjs';
import { IConfection } from './models/confection';
import { CONFECTION_URL, endpoints } from '../../../shared/constants/api.constants';
import { environment } from 'src/environments/environment';
import { IPagedList } from '../../../shared/models/paged-list';
import { IQueryParameters } from '../../../shared/models/query-parameters';

@Injectable({
  providedIn: 'root'
})
export class ConfectionApi {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  public getPaginatedConfections(queryParameters: IQueryParameters): Observable<IPagedList<IConfection>> {
    const params = new HttpParams({ fromObject: { 
      pageNumber: queryParameters.pageNumber, 
      pageSize: queryParameters.pageSize, 
      searchTerm: queryParameters.searchTerm ?? '' 
    }})

    const url = this.apiService.getApiUrl(endpoints.confection.getConfections);
    return this.httpClient.get<IPagedList<IConfection>>(url, { params });
  }

  public getConfection(id: number) : Observable<IConfection> {
    const url = `${environment.apiUrl}${CONFECTION_URL}/${id}`;
    return this.httpClient.get<IConfection>(url)
  }
}
