import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Service } from './service';

@Injectable()
export class HomeService extends Service {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAll(cep:String): Observable<any> {
    return this.http.get('http://viacep.com.br/ws/09571450/json');
  }



}