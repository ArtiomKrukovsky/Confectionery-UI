import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { delay, Observable } from "rxjs";
import { IPie } from "./models/pie";

import { of } from 'rxjs/internal/observable/of';

import { PIES } from '../../../data/pies'

@Injectable({
    providedIn: 'root'
})
export class PieApi {
    constructor(private httpClient: HttpClient){
    }

    public getAll(): Observable<IPie[]> {
        return of(PIES)
            .pipe(
                delay(500)
            );

        //return this.httpClient.get<IPie[]>('');
    }
}