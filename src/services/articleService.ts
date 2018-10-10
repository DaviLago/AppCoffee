import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

//import { AnotacaoModel } from '../models/AnotacaoModel';
import { Service } from './service';

@Injectable()
export class ArticleService extends Service {

  //private anotacao: AnotacaoModel;

  //private API_URL = 'https://reqres.in/api/'

  constructor(public http: Http) {
    super();
  }

  public gett(){
    return super.getUrl();
  }
}