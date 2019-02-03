import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public get;
  public list;

  constructor(private http: HttpClient) {
    const serviceURL = `${environment.apiURL}/article`;

    this.list = function() {
      return http.get(`${serviceURL}/list`);

    };
  }
}
