import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html'
})
export class AnotacaoModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
    
  }
  
  anotacao = {}
  logForm() {
    console.log(this.anotacao)
  }

  modalCloseClickEvent() {
    this.viewCtrl.dismiss();
  }

}
