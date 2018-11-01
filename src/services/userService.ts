import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Super service
import { Service } from './service';

//Model
import { UserModel } from '../models/UserModel';

@Injectable()
export class UserService extends Service {

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

  public getUserByEmailAndPassword(user: UserModel): Observable<UserModel> {
    return this.http.get<UserModel>(`${Service.getBaseUrl()}/user/auth/${user.email}/${user.password}`);
  }

  public postUser(user: UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${Service.getBaseUrl()}/user`, user,  this.httpOptions);
  }

  public putUser(user: UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${Service.getBaseUrl()}/user/${user.id}`, user, this.httpOptions);
  }

  public deleteUser(user: UserModel):Observable<UserModel>{
    return this.http.delete<UserModel>(`${Service.getBaseUrl()}/annotation/${user.id}`, this.httpOptions);
  }

}