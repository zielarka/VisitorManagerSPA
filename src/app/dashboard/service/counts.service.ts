import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import { CountsModelPerDay } from '../model/CountsModelPerDay';
import { Router,UrlSerializer } from '@angular/router';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class CountsService {

  url = environment.BASE_API_URL;
  constructor( private http: HttpClient, private router: Router, private serializer: UrlSerializer) { }
  
  getCountsPerDay(dateFrom: string,dateto: string ): Observable<any> {
    const queryParams = { startDate: dateFrom, endDate: dateto };
    const tree = this.router.createUrlTree([], { queryParams });
    return this.http.get<CountsModelPerDay[]>(this.url + this.serializer.serialize(tree))
  }
}

