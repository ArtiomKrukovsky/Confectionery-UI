import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/http/api.service";
import { endpoints, USER_URL } from "src/app/shared/constants/api.constants";
import { environment } from "src/environments/environment";
import { IUser } from "./models/user/user";

@Injectable({
    providedIn: 'root'
})
export class UserApi {
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) { }

    public getUser(email: string): Observable<IUser> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${USER_URL}/${email}`;
        return this.httpClient.get<IUser>(url);
    }

    public createUser(user: IUser): Observable<string> {
        const url = this.apiService.getApiUrl(endpoints.user.createUser);
        return this.httpClient.post<string>(url, user);
    }
}