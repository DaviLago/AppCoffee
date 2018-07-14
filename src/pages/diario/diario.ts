import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { AnotacaoModalPage } from './CRUD/anotacao';

@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html'
})
export class DiarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
    
  }

  
  anotationCreateClickEvent(e) {
    this.presentModal();
  }

  presentModal() {
    const modal = this.modalCtrl.create(AnotacaoModalPage);
    modal.present();
  }
  
}
