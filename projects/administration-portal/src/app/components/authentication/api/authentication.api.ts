import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../../core/http/api.service";
import { endpoints } from "../../../shared/constants/api.constants";
import { ILogin } from "./models/login";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationApi {
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) { }

    public logIn(login: ILogin): Observable<void> {
        const url = this.apiService.getApiUrl(endpoints.authentication.logIn);
        return this.httpClient.post<void>(url, login);
    }
}