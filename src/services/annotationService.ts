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
import { AnnotationModel } from '../models/AnnotationModel';
import { HttpMethod } from './HttpMethod';

@Injectable()
export class AnnotationService extends Service {

  private httpOptions = {};

  constructor(public http: HttpClient, public session: Session) {
    super(http, session);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${Service.getUser().token}`
      })
    };
  }

  public getAllAnnoations(): Observable<Array<AnnotationModel>> {
    return this.http.get<Array<AnnotationModel>>(HttpMethod.GET_ANNOTATION, this.httpOptions);
  }

  public postAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.post<AnnotationModel>(HttpMethod.POST_ANNOTATION, annotation,  this.httpOptions);
  }

  public putAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.put<AnnotationModel>(`${HttpMethod.PUT_ANNOTATION}/${annotation.id}`, annotation, this.httpOptions);
  }

  public deleteAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.delete<AnnotationModel>(`${HttpMethod.DELETE_ANNOTATION}/${annotation.id}`, this.httpOptions);
  }

}