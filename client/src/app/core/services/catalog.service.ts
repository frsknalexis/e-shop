import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogBrand, CatalogItem, CatalogPage, CatalogType } from '../../catalog/models';
import { toQueryParams } from '../../utils/to-query-params';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class CatalogService {
  constructor(private readonly http: HttpClient) {
  }

  fetchCatalogItems(brandId?: number, typeId?: number, pageIndex?: number): Observable<CatalogPage> {
    return this.http.get<CatalogPage>(`${environment.apiUrl}/api/v1/catalog/items`, {
      params: toQueryParams({
        brandId,
        typeId,
        pageIndex
      }),
    });
  }

  fetchById(catalogItemId: number): Observable<CatalogItem> {
    return this.http.get<CatalogItem>(`${environment.apiUrl}/api/v1/catalog/items/${catalogItemId}`);
  }

  add(catalogItem: CatalogItem): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/api/v1/catalog/items`, catalogItem);
  }

  update(catalogItem: CatalogItem): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/api/v1/catalog/items`, catalogItem);
  }

  delete(catalogItemId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/api/v1/catalog/items/${catalogItemId}`);
  }

  fetchCatalogTypes(): Observable<CatalogType[]> {
    return this.http.get<CatalogType[]>(`${environment.apiUrl}/api/v1/catalog/catalogtypes`);
  }

  fetchCatalogBrands(): Observable<CatalogBrand[]> {
    return this.http.get<CatalogBrand[]>(`${environment.apiUrl}/api/v1/catalog/catalogbrands`);
  }

  fetchTopFive(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(`${environment.apiUrl}/api/v1/catalog/topfive`);
  }

}