import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { delay, Observable } from "rxjs";
import { IConfection } from "./models/confection";

import { of } from 'rxjs/internal/observable/of';

import { CONFECTIONS } from '../../../data/confections'

@Injectable({
    providedIn: 'root'
})
export class ConfectionApi {
    constructor(private httpClient: HttpClient){
    }

    public getAll(): Observable<IConfection[]> {
        return of(CONFECTIONS)
            .pipe(
                delay(500)
            );

        //return this.httpClient.get<IConfection[]>('');
    }

    public get(id: string): Observable<IConfection> {
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