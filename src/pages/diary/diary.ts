import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, AlertController, Loading, LoadingController, ItemSliding  } from 'ionic-angular';

import { AnnotationFormModalPage } from './annotation-form/annotation-form';
import { AnnotationDetailPage } from './annotation-detail/annotation-detail';

import { AnnotationModel } from '../../models/AnnotationModel';
import { AnnotationService } from '../../services/annotationService';

@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {
  
  public annotations: Array<AnnotationModel>;
  private loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
              public alertCtrl: AlertController, public annotationService: AnnotationService,
              public loadingCtrl: LoadingController) {
    this.getAllAnnotations();
  }
 
  public getAllAnnotations(){
    this.openLoading();
    this.annotationService.getAllAnnoations()
    .subscribe(
      (data) => {
        this.annotations = data;
      },
      (error:Error) => {
        console.log(error.message);
      }
    );
    this.closeLoading();
  }
  
  public deleteAnnotation(annotation:AnnotationModel){
    this.openLoading();
    this.annotationService.deleteAnnotation(annotation).subscribe(
      data => console.log(data),
      (error:Error) => console.log(error.message)
    );
    this.closeLoading();
  }

  annotationCreateClickEvent(e, annotaion) {
    this.presentModal(annotaion);
  }

  annotationEditClickEvent(e, item: ItemSliding, annotation) {
    item.close();
    this.presentModal(annotation);
  }

  presentModal(annotation) {
    const modal = this.modalCtrl.create(AnnotationFormModalPage, annotation);
    modal.present();    
    modal.onDidDismiss((annotation, action) => {
      if(action === "post")
        this.annotations.push(annotation);
      // else
        // this.getAllAnnotations();
    });
  }

  annotationDeleteClickEvent(e, item: ItemSliding, annotation){
    item.close();
    this.showConfirm(annotation);
  }

  showConfirm(annotation:AnnotationModel) {
    const confirm = this.alertCtrl.create({
      title: 'Deseja realmente exluir?',
      //message: '',
      buttons: [
        {
          text: 'NÃO',
          handler: () => {
            console.log('Não clicked');
          }
        },
        {
          text: 'SIM',
          handler: () => {
            console.log('Sim clicked');
            this.deleteAnnotation(annotation);
            console.log(this.annotations.findIndex(a => {return a.id === annotation.id}));
			      let index = this.annotations.findIndex(a => {return a.id === annotation.id});
            this.annotations.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  itemTapped(event, annotation) {
    this.navCtrl.push(AnnotationDetailPage, {
      annotation: annotation,
      annotations: this.annotations
    });
  }

  openLoading(){
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }

}