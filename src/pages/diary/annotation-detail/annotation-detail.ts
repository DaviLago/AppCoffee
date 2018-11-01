import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, AlertController } from 'ionic-angular';

import { AnnotationModel } from '../../../models/AnnotationModel';
import { AnnotationFormModalPage } from '../annotation-form/annotation-form';
import { AnnotationService } from '../../../services/annotationService';

@Component({
  selector: 'page-annotation-detail',
  templateUrl: 'annotation-detail.html'
})
export class AnnotationDetailPage {

  public annotation: AnnotationModel;
  public annotations: Array<AnnotationModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
              public alertCtrl: AlertController, public annotationService: AnnotationService) {
        this.annotation = navParams.get('annotation');
        this.annotations = navParams.get('annotations');
  }
 
  public deleteAnnotation(annotation:AnnotationModel){
    this.annotationService.deleteAnnotation(annotation).subscribe(
      data => console.log(data),
      (error:Error) => console.log(error.message)
    );
  }

  presentModal(e) {
    const modal = this.modalCtrl.create(AnnotationFormModalPage, new AnnotationModel(this.annotation));
    modal.present();    
    modal.onDidDismiss((annotation, action) => {
      if(action === "put"){
        this.annotation = annotation
        let index = this.annotations.findIndex(a => {return a.id === this.annotation.id});
        this.annotations[index] = this.annotation;
      }
    });
  }

  annotationDeleteClickEvent(e){
    this.showConfirm();
  }

  showConfirm() {
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
            this.deleteAnnotation(this.annotation);
            let index = this.annotations.findIndex(a => {return a.id === this.annotation.id});
            this.annotations.splice(index, 1);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}