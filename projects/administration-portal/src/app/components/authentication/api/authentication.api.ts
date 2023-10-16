import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../../core/http/api.service";
import { endpoints } from "../../../shared/constants/api.constants";
import { ILogin } from "./models/login";
import { ITokens } from "./models/tokens";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationApi {
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) { }

    public logIn(login: ILogin): Observable<ITokens> {
        const url = this.apiService.getApiUrl(endpoints.authentication.logIn);
        return this.httpClient.post<ITokens>(url, login);
    }

    public refreshToken(tokens: ITokens): Observable<ITokens> {
        const url = this.apiService.getApiUrl(endpoints.authentication.refreshToken);
        return this.httpClient.post<ITokens>(url, tokens);
    }
}