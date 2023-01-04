import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ConfectionApi } from '../api/confection.api';
import { IConfectionMapping } from '../api/models/confectionMapping';

@Injectable({
  providedIn: 'root'
})
export class ConfectionMappingsResolver implements Resolve<IConfectionMapping[]> {
  
  constructor(private confectionApi: ConfectionApi) { }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<IConfectionMapping[]> {
    return this.confectionApi.getAllConfectionMappings();
  }
}
