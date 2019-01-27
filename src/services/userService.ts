import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Super service
import { Service } from './service';

//Model
import { UserModel } from '../models/UserModel';
import { HttpMethod } from './HttpMethod';

@Injectable()
export class UserService extends Service {

  //Do not need authentication token
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  public static setUser(user:UserModel){
    Service.setUser(user);
  }

  public getTokenByEmailAndPassword(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(HttpMethod.POST_AUTH, user, this.httpOptions);
  }

  public postUser(user: UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(HttpMethod.POST_USER, user,  this.httpOptions);
  }

}