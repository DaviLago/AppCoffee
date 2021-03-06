import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Session
import { Session } from '../session/session';

//Super service
import { Service } from './service';

//Model
import { UserModel } from '../models/UserModel';
import { HttpMethod } from './HttpMethod';
import { Playload } from '../models/Playload';

@Injectable()
export class UserService extends Service {

  constructor(public http: HttpClient, public session: Session) {
    super(http, session);
  }

  public static setUser(user:UserModel){
    Service.setUser(user);
  }

  public static setPlayload(playload:Playload){
    Service.setPlayload(playload);
  }

  public getTokenByEmailAndPassword(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      let response = this.http.post<UserModel>(HttpMethod.POST_AUTH, user);
      response.subscribe(
        (userModel:UserModel) => {
          let playload: Playload = JSON.parse(window.atob(userModel.token.split('.')[1]));
          Service.setPlayload(playload);
          userModel.id = playload.sub;
          Service.setUser(userModel);
          Service.getSession().create(userModel);
          this.getUserInfo(Service.getUser());
          console.log(Service.getUser());
          resolve(userModel);
        },
        (error:any) => {
          reject(error);
        }
      );
    });
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

  public postUser(user: UserModel): Promise<UserModel>{
    return new Promise((resolve, reject) => {
      this.http.post<UserModel>(HttpMethod.POST_USER, user).subscribe(
        (userModel:UserModel) => {
          let playload: Playload = JSON.parse(window.atob(userModel.token.split('.')[1]));
          Service.setPlayload(playload);
          userModel.id = playload.sub;
          Service.setUser(userModel);
          Service.getSession().create(userModel);
          this.getUserInfo(Service.getUser());
          console.log(Service.getUser());
          resolve(userModel);
        },
        (error:any) => {
          reject(error);
        }
      );
    });
  }

}