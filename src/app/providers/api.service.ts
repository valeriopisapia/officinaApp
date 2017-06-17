import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private _url = "./assets/json/data.json";

  constructor(private _http: Http) { }


  getData (): Observable<any> {
    return this._http.get(this._url);
  }
}
