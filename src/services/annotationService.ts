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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  public getAllAnnoations(): Observable<Array<AnnotationModel>> {
    return this.http.get<Array<AnnotationModel>>(`${Service.getBaseUrl()}/annotation`);
  }

  public postAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.post<AnnotationModel>(`${Service.getBaseUrl()}/annotation`, annotation,  this.httpOptions);
  }

  public putAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.put<AnnotationModel>(`${Service.getBaseUrl()}/annotation/${annotation.id}`, annotation, this.httpOptions);
  }

  public deleteAnnotation(annotation: AnnotationModel):Observable<AnnotationModel>{
    return this.http.delete<AnnotationModel>(`${Service.getBaseUrl()}/annotation/${annotation.id}`, this.httpOptions);
  }

}