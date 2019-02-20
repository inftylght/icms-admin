import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public list;

  constructor(private http: HttpClient) {
    const serviceURL = `${environment.apiURL}/calculate`;

    this.list = function() {
      return new Promise((onFullFill, reject) => {
        const req = http.get(`${serviceURL}/list`)
          .subscribe((data) => {
              onFullFill(data);
              req.unsubscribe();
            },
            (error) => {
              reject(error);
              req.unsubscribe();
            });
      });
    };
  }
}
