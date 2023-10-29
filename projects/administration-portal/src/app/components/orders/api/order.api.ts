import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderDetail } from './models/order-detail';
import { Observable } from 'rxjs';
import { endpoints } from '../../../shared/constants/api.constants';
import { ApiService } from '../../../core/http/api.service';
import { IPagedList } from '../../../shared/models/paged-list';
import { IQueryParameters } from '../../../shared/models/query-parameters';

@Injectable({
  providedIn: 'root'
})
export class OrderApi {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  public getPaginatedOrders(queryParameters: IQueryParameters): Observable<IPagedList<IOrderDetail>> {
    const params = new HttpParams()
      .set('pageNumber', queryParameters.pageNumber)
      .set('pageSize', queryParameters.pageSize)
      .set('searchTerm', queryParameters.searchTerm ?? '')

    const url = this.apiService.getApiUrl(endpoints.order.getOrders);
    return this.httpClient.get<IPagedList<IOrderDetail>>(url, { params });
  }
}
