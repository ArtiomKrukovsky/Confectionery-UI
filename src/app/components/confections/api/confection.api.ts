import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { delay, Observable } from "rxjs";
import { IConfection } from "./models/confection";

import { of } from 'rxjs/internal/observable/of';

import { CONFECTIONS } from '../../../core/mocks/confections'
import { IConfectionMapping } from "./models/confectionMapping";
import { CONFECTION_MAPPINGS } from "src/app/core/mocks/confection-mappings";

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
        return of(CONFECTIONS.find(x => x.id === id) as IConfection)
            .pipe(
                delay(500)
            );
    }

    public save(confection: IConfection): Observable<IConfection> {
       return this.httpClient.post<IConfection>('', confection);
    }

    public update(confection: IConfection): Observable<IConfection>{
        return this.httpClient.put<IConfection>('', confection);
    }
}