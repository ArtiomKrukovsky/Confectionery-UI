import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { delay, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IConfection } from "./models/confection";

import { of } from 'rxjs/internal/observable/of';

import { CONFECTIONS } from '../../../core/mocks/confections'
import { IConfectionMapping } from "./models/confection-mapping";
import { CONFECTION_MAPPINGS } from "src/app/core/mocks/confection-mappings";
import { CONFECTION_URL } from "src/app/shared/constants/api.constants";

@Injectable({
    providedIn: 'root'
})
export class ConfectionApi {
    constructor(private httpClient: HttpClient){
    }

    public getAllConfectionMappings(): Observable<IConfectionMapping[]> {
        return of(CONFECTION_MAPPINGS)
            .pipe(
                delay(500)
            );

        //return this.httpClient.get<IConfection[]>('');
    }

    public getAllConfections(): Observable<IConfection[]> {
        return of(CONFECTIONS)
            .pipe(
                delay(500)
            );

        //return this.httpClient.get<IConfection[]>('');
    }

    public getConfection(id: string): Observable<IConfection> {
        // todo: add queries and params
        return this.httpClient.get<IConfection>(`${environment.apiUrl}${CONFECTION_URL}/${id}`);
    }

    public save(confection: IConfection): Observable<IConfection> {
       return this.httpClient.post<IConfection>('', confection);
    }

    public update(confection: IConfection): Observable<IConfection>{
        return this.httpClient.put<IConfection>('', confection);
    }
}