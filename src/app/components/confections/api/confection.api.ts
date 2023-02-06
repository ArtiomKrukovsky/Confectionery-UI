import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IConfection } from "./models/confection/confection";

import { IConfectionMapping } from "./models/confection/confection-mapping";
import { CONFECTION_URL } from "src/app/shared/constants/api.constants";

@Injectable({
    providedIn: 'root'
})
export class ConfectionApi {
    constructor(private httpClient: HttpClient){
    }

    public getAllConfectionMappings(): Observable<IConfectionMapping[]> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${CONFECTION_URL}`;
        return this.httpClient.get<IConfectionMapping[]>(url);
    }

    public getAllConfections(): Observable<IConfection[]> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${CONFECTION_URL}`;
        return this.httpClient.get<IConfection[]>(url);
    }

    public getConfection(id: string): Observable<IConfection> {
        // todo: add queries and params
        const url = `${environment.apiUrl}${CONFECTION_URL}/${id}`;
        return this.httpClient.get<IConfection>(url);
    }

    // todo: move other apis to separate app
    public save(confection: IConfection): Observable<IConfection> {
       return this.httpClient.post<IConfection>('', confection);
    }

    public update(confection: IConfection): Observable<IConfection>{
        return this.httpClient.put<IConfection>('', confection);
    }
}