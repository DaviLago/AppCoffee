import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

//import { AnotacaoModel } from '../models/AnotacaoModel';
import { Service } from './service';

@Injectable()
export class ArticleService extends Service {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getBaseUrl(){
    return super.getBaseUrl();
  }
}