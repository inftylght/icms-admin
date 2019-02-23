import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public get;
  public list;
  public update;
  public create;
  public delete;

  constructor(private http: HttpClient) {
    const serviceURL = `${environment.apiURL}/article`;

    this.list = function () {
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

    this.get = function (id) {
      return new Promise((onFullFill, reject) => {
        const req = http.get(`${serviceURL}/${id}`)
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

    this.update = function (body) {
      return new Promise((onFullFill, reject) => {
        const req = http.put(`${serviceURL}`, body)
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

    this.create = function (body) {
      return new Promise((onFullFill, reject) => {
        const req = http.post(`${serviceURL}`, body)
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

    this.delete = function (id) {
      return new Promise((onFullFill, reject) => {
        const req = http.delete(`${serviceURL}/${id}`)
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
