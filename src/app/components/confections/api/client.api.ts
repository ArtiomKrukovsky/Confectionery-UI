import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/http/api.service";
import { endpoints, CLIENT_URL } from "src/app/shared/constants/api.constants";
import { environment } from "src/environments/environment";
import { IClient } from "./models/client/client";

@Injectable({
    providedIn: 'root'
})
export class ClientApi {
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) { }

    public getClient(email: string): Observable<IClient> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${CLIENT_URL}/${email}`;
        return this.httpClient.get<IClient>(url);
    }

    public createClient(client: IClient): Observable<string> {
        const url = this.apiService.getApiUrl(endpoints.client.createClient);
        return this.httpClient.post<string>(url, client);
    }
}