import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, AlertController  } from 'ionic-angular';
import { AnnotationModalPage } from './annotation/annotation';

import { AnnotationModel } from '../../models/AnnotationModel';
import { AnnotationService } from '../../services/annotationService';

@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {
  public annotations: Array<AnnotationModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
              public alertCtrl: AlertController, public annotationService: AnnotationService) {
    this.getAllAnnotations();
  }
 
  public getAllAnnotations(){
    this.annotationService.getAllAnnoations()
    .subscribe(
          (data) => {
            this.annotations = data;
          },
          (error:Error) => {
            console.log(error.message);
          }
        );
  }
  
  public deleteAnnotation(annotation:AnnotationModel){
    this.annotationService.deleteAnnotation(annotation).subscribe(
      data => console.log(data),
      (error:Error) => console.log(error.message)
    );
  }

  annotationCreateClickEvent(e, annotation) {
    this.presentModal(annotation);
  }

  presentModal(annotation) {
    const modal = this.modalCtrl.create(AnnotationModalPage, annotation);
    modal.present();    
    modal.onDidDismiss((annotation, action) => {
      if(action === "post")
        this.annotations.push(annotation);
      else
        this.getAllAnnotations();
    });
  }

  annotationDeleteClickEvent(e, annotation){
    this.showConfirm(annotation);
  }

  showConfirm(annotation:AnnotationModel) {
    const confirm = this.alertCtrl.create({
      title: 'Deseja realmente exluir?',
      //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
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
  
}