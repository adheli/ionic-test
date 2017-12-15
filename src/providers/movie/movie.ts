import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseURL: string;
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  getNowPlaying(page?: number): Observable<any> {
    const nowPlaying = this.baseURL.concat('movie/now_playing');
    console.log(nowPlaying);
    return this.http.get(nowPlaying, {
      params: this.getParams(page)
    });
  }

  getTopRated(page?: number): Observable<any> {
    const topRated = this.baseURL.concat('movie/top_rated');
    console.log(topRated);
    return this.http.get(topRated, {
      params: this.getParams(page)
    });
  }

  private getParams(page?: number) {
    let params = new HttpParams().set('api_key', 'cf923615ae30552b5e43ea41864f4005').set('language', 'pt-BR');

    if (page !== undefined) {
      params = params.append('page', page.toString());
    }
    return params;
  }
}
