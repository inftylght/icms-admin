import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private serviceURL = `${environment.apiURL}/config`;

  getConfigMap() {
    return this.http.get(`${this.serviceURL}/configMap`).toPromise();
  }

  update(obj) {
    return this.http.put(`${this.serviceURL}`, obj).toPromise();
  }

  constructor(
    private http: HttpClient
  ) {}
}
