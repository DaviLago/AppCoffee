import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Super service
import { Service } from './service';

//Model
import { ArticleModel } from '../models/ArticleModel';

//Enum
import { Theme } from '../enums/TemaEnum';
import { HttpMethod } from './HttpMethod';

@Injectable()
export class ArticleService extends Service {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${Service.getUser().token}`
    })
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllArticlesByTheme(theme: Theme): Observable<Array<ArticleModel>> {
    return this.http.get<Array<ArticleModel>>(`${HttpMethod.GET_ARTICLE_BY_THEME}/${theme}`, this.httpOptions);
  }

}