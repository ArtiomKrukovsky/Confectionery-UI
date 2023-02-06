import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ORDER_URL } from "src/app/shared/constants/api.constants";
import { environment } from "src/environments/environment";
import { IOrder } from "./models/order/order";

@Injectable({
    providedIn: 'root'
})
export class OrderApi {
    constructor(private httpClient: HttpClient){
    }

    public createOrder(order: IOrder): Observable<boolean> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${ORDER_URL}`;
        return this.httpClient.post<boolean>(url, order);
    }
}