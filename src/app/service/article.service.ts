import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private serviceURL = `${environment.apiURL}/article`;

  list() {
    return this.http
      .get(`${this.serviceURL}/list`)
      .toPromise();
  }

  get(id) {
    return this.http
      .get(`${this.serviceURL}/${id}`)
      .toPromise();
  }

  update(body) {
    return this.http
      .put(`${this.serviceURL}`, body)
      .toPromise();
  }

  create(body) {
    return this.http
      .post(`${this.serviceURL}`, body)
      .toPromise();
  }

  delete(id) {
    return this.http
      .delete(`${this.serviceURL}/${id}`)
      .toPromise();
  }

  constructor(private http: HttpClient) {
  }
}
