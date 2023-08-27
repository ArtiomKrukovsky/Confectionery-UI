import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderApi {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }

}
