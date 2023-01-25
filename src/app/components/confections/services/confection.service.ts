import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, tap } from 'rxjs';
import { IConfection } from '../api/models/confection';
import { ConfectionApi } from '../api/confection.api';
import { ConfectionRoutesByTypeMap, ConfectionTitlesByTypeMap } from 'src/app/shared/maps/confection-type.map';
import { ConfectionType } from 'src/app/shared/enums/confection-type.enum';
import { ConfectionPictureApi } from '../api/confection-picture.api';
import { ImageProcessingService } from 'src/app/services/image-processing.service';
import { IConfectionPicture } from '../api/models/confection-picture';
import { SafeUrl } from '@angular/platform-browser';
import { EMPTY_URL } from 'src/app/shared/constants/common.constants';

@Injectable({
  providedIn: 'root'
})
export class ConfectionService implements OnDestroy {

  public get Confections(): Observable<IConfection[]> {
    return this.confections$.asObservable();
  } 

  public get SelectedConfection(): Observable<IConfection> {
    return this.selectedConfection$.asObservable();
  }

  public get IsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  //todo: move to constans
  private defaultConfection: IConfection = {
    name: '',
    description: '',
    price: 0,
    pictureUrl: '',
    weight: 0,
    minimumOrderCount: 1,
    isOrderCountLimited: false,
    isOutOfStock: false
  }

  private confections$: BehaviorSubject<IConfection[]>;
  private selectedConfection$: BehaviorSubject<IConfection>;
  private isLoading$: BehaviorSubject<boolean>;

  constructor(
    private confectionApi: ConfectionApi, 
    private confectionPictureApi: ConfectionPictureApi,
    private imageProcessingService: ImageProcessingService
  ) { 
    this.confections$ = new BehaviorSubject<IConfection[]>([]);
    this.selectedConfection$ = new BehaviorSubject<IConfection>(this.defaultConfection);
    this.isLoading$ = new BehaviorSubject<boolean>(false);
  }

  ngOnDestroy(): void {
    this.confections$.next([]);
    this.confections$.complete();
    this.selectedConfection$.next(this.defaultConfection);
    this.selectedConfection$.complete();
    this.isLoading$.next(false);
    this.isLoading$.complete();
  }

  public fetchConfections() : void {
    this.isLoading$.next(true);

    this.confectionApi.getAllConfections()
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe(confections => {
      this.confections$.next(confections);
    });
  }

  public fetchConfection(id: string) : void {
    this.isLoading$.next(true);

    forkJoin([
      this.confectionApi.getConfection(id),
      this.confectionPictureApi.getConfectionPicture(id)
    ])
    .pipe(
      tap(() => this.isLoading$.next(false))
    )
    .subscribe(([confection, confectionPicture]) => {
      confection.pictureUrl = this.getConfectionPictureUrl(confectionPicture);
      this.selectedConfection$.next(confection);
    });
  }

  public saveConfection(confection: IConfection) : void {
    this.confectionApi.save(confection)
    .pipe(
      tap(() => this.confections$.next([...this.confections$.value, confection]))
    )
    .subscribe()
  }

  public computeConfectionRoute(confectionType: ConfectionType): string {
    return ConfectionRoutesByTypeMap.get(confectionType);
  }

  public computeConfectionTitle(confectionType: ConfectionType): string {
    return ConfectionTitlesByTypeMap.get(confectionType);
  }

  private getConfectionPictureUrl(confectionPicture: IConfectionPicture): SafeUrl {
    if (!confectionPicture) {
      return EMPTY_URL;
    }

    return this.imageProcessingService.getImageUrl(
      confectionPicture.extension, 
      confectionPicture.content
    );
  }
}
