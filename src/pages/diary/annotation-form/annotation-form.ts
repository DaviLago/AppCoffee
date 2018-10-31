import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';

import { AnnotationService } from '../../../services/annotationService';
import { AnnotationModel } from '../../../models/AnnotationModel';

@Component({
  selector: 'page-annotation-form',
  templateUrl: 'annotation-form.html'
})
export class AnnotationFormModalPage {
  
  private annotation:AnnotationModel;
  private editMode:Boolean = true;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public annotationService: AnnotationService
  ) {  
    this.annotation = navParams.data;
    if(this.annotation.id === undefined)
      this.editMode = false;
  }

  private putForm(annotation:AnnotationModel){
    this.annotationService.putAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "put"),
        (error:Error) => console.log(error.message)
      );
  }

  private postForm(annotation:AnnotationModel){
    this.annotationService.postAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "post"),
        (error:Error) => console.log(error.message)
      );
  }

  public deleteAnnotation(annotation:AnnotationModel){
    this.annotationService.deleteAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "delete"),
        (error:Error) => console.log(error.message)
      );
  }
  
  saveForm(annotation:AnnotationModel) {
    if(this.editMode)
      this.putForm(annotation);
    else
      this.postForm(annotation);
  }

  modalCloseClickEvent(action:string) {
    this.viewCtrl.dismiss(this.annotation, action);
  }

}
