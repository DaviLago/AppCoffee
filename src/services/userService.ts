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
import { Playload } from '../models/Playload';

@Injectable()
export class UserService extends Service {

  constructor(public http: HttpClient) {
    super(http);
  }

  public static setUser(user:UserModel){
    Service.setUser(user);
  }

  public static setPlayload(playload:Playload){
    Service.setPlayload(playload);
  }

  public getTokenByEmailAndPassword(user: UserModel): Observable<UserModel> {
    let response = this.http.post<UserModel>(HttpMethod.POST_AUTH, user);
    response.subscribe(
        (userModel:UserModel) => {
          let playload: Playload = JSON.parse(window.atob(userModel.token.split('.')[1]));
          Service.setPlayload(playload);
          userModel.id = playload.sub;
          Service.setUser(userModel);
          this.getUserInfo(Service.getUser());
          console.log(Service.getUser());
        }
      );
    return response;
  }

  public getUserInfo(user: UserModel): Observable<UserModel> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${Service.getUser().token}`
      })
    };
    let response = this.http.get<UserModel>(`${HttpMethod.GET_USER}/${Service.getUser().id}`, httpOptions);
    response.subscribe(
      (userInfo:UserModel) => {
        Service.getUser().name = userInfo.name;
        Service.getUser().email = userInfo.email;
      }
    );
    return response;
  }

  public postUser(user: UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(HttpMethod.POST_USER, user);
  }

}