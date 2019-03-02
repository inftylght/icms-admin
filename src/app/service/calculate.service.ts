import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private serviceURL = `${environment.apiURL}/calculate`;

  list() {
    return this.http
      .get(`${this.serviceURL}/list`)
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

  constructor(private http: HttpClient) {
  }
}
