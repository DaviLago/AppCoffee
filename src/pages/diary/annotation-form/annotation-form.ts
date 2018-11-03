import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController, Loading, LoadingController, ToastController } from 'ionic-angular';

import { AnnotationService } from '../../../services/annotationService';
import { AnnotationModel } from '../../../models/AnnotationModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-annotation-form',
  templateUrl: 'annotation-form.html'
})
export class AnnotationFormModalPage {
  
  private annotation:AnnotationModel;
  private editMode:Boolean = true;
  private validator: FormGroup;
  public loading: Loading;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public annotationService: AnnotationService, private toastCtrl: ToastController) {
    
    this.validator = new FormGroup({
      title: new FormControl('', Validators.required)
    });

    this.annotation = navParams.data;
    if(this.annotation.id === undefined)
      this.editMode = false;
  }

  private putForm(annotation:AnnotationModel){
    this.openLoading();
    this.annotationService.putAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "put"),
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error.message);
        }
      );
      this.closeLoading();
  }

  private postForm(annotation:AnnotationModel){
    this.openLoading();
    this.annotationService.postAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "post"),
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error.message);
        }
      );
      this.closeLoading();
  }

  public deleteAnnotation(annotation:AnnotationModel){
    this.openLoading();
    this.annotationService.deleteAnnotation(annotation)
      .subscribe(
        (data:AnnotationModel) => this.viewCtrl.dismiss(data, "delete"),
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error.message);
        }
      );
      this.closeLoading();
  }
  
  saveForm(annotation:AnnotationModel) {
    if(this.validator.valid){
      if(this.editMode)
        this.putForm(annotation);
      else
        this.postForm(annotation);
    }
    else
      this.presentToast("É preciso preencher o título");
  }

  modalCloseClickEvent(action:string) {
    this.viewCtrl.dismiss(this.annotation, action);
  }

  openLoading(){
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 7000,
      position: 'bottom'
    });
  
    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    // });
  
    toast.present();
  }

}
