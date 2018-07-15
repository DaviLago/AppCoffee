import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, AlertController  } from 'ionic-angular';
import { AnotacaoModalPage } from './CRUD/anotacao';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
  }
  
  anotationCreateClickEvent(e) {
    this.presentModal();
  }
  
  presentModal() {
    const modal = this.modalCtrl.create(AnotacaoModalPage, {teste: 'teste'});
    modal.present();
  }

  anotationDeleteClickEvent(e){
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
          }
        }
      ]
    });
    confirm.present();
  }
  
}
