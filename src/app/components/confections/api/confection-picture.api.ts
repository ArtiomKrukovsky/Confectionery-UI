import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { CONFECTION_URL } from "src/app/shared/constants/api.constants";
import { IConfectionPicture } from "./models/confection-picture";

@Injectable({
    providedIn: 'root'
})
export class ConfectionPictureApi {
    constructor(private httpClient: HttpClient){
    }

    public getConfectionPicture(confectionId: string): Observable<IConfectionPicture> {
        // todo: add queries and params
        var url = `${environment.apiUrl}${CONFECTION_URL}/${confectionId}/picture`;

        return this.httpClient.get<IConfectionPicture>(url);
    }
}