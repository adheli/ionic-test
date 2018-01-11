import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { API_KEY, DEFAULT_LANGUAGE, MOVIE_URL } from './../../config/consts';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseURL: string;
  
  constructor(public http: HttpClient) {
    this.baseURL = MOVIE_URL;
  }

  getNowPlaying(page?: number): Observable<any> {
    const nowPlaying = this.baseURL.concat('now_playing');
    console.log(nowPlaying);
    return this.http.get(nowPlaying, {
      params: this.getParams(page)
    });
  }

  getTopRated(page?: number): Observable<any> {
    const topRated = this.baseURL.concat('top_rated');
    console.log(topRated);
    return this.http.get(topRated, {
      params: this.getParams(page)
    });
  }

  private getParams(page?: number) {
    let params = new HttpParams().set('api_key', API_KEY).set('language', DEFAULT_LANGUAGE);

    if (page !== undefined) {
      params = params.append('page', page.toString());
    }
    return params;
  }
}
