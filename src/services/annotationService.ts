import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

//Super service
import { Service } from './service';

//Model
import { AnnotationModel } from '../models/AnnotationModel';

@Injectable()
export class AnnotationService extends Service {

  private httpOptions = {};

  constructor(public http: HttpClient) {
    super(http);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'userId': Service.getUser().id
      })
    };
  }

  public getAllAnnoations(): Observable<Array<AnnotationModel>> {
    return this.http.get<Array<AnnotationModel>>(`${Service.getBaseUrl()}/user/${Service.getUser().id}/annotation`, this.httpOptions);
  }

  public postAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    annotation.user = Service.getUser();
    return this.http.post<AnnotationModel>(`${Service.getBaseUrl()}/user/${Service.getUser().id}/annotation`, annotation,  this.httpOptions);
  }

  public putAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.put<AnnotationModel>(`${Service.getBaseUrl()}/user/${Service.getUser().id}/annotation/${annotation.id}`, annotation, this.httpOptions);
  }

  public deleteAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.delete<AnnotationModel>(`${Service.getBaseUrl()}/user/${Service.getUser().id}/annotation/${annotation.id}`, this.httpOptions);
  }

}