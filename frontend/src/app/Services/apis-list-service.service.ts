import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiDescList } from '../Models/api-desc-list.model';
import { ApiDesc } from '../Models/api-desc.model';

@Injectable({
  providedIn: 'root'
})
export class ApisListServiceService {
  private http: HttpClient;
  private listApisUrl: string = "http://localhost:8080/web/api/listApis";

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  getApisJson(): Observable<ApiDescList> {
      return this.http.get<ApiDescList>(this.listApisUrl)
  }
}
