import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderDetail } from './models/order-detail';
import { Observable } from 'rxjs';
import { endpoints } from '../../../shared/constants/api.constants';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderApi {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

  public getOrders(): Observable<IOrderDetail[]> {
    const url = this.apiService.getApiUrl(endpoints.order.getOrders);
    return this.httpClient.get<IOrderDetail[]>(url);
  }
}
