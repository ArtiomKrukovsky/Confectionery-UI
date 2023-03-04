import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/http/api.service";
import { endpoints } from "src/app/shared/constants/api.constants";
import { IOrder } from "./models/order/order";

@Injectable({
    providedIn: 'root'
})
export class OrderApi {
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) { }

    public createOrder(order: IOrder): Observable<boolean> {
        const url = this.apiService.getApiUrl(endpoints.order.createOrder);
        return this.httpClient.post<boolean>(url, order);
    }
}