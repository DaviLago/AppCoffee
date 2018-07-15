import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html'
})
export class AnotacaoModalPage {

  constructor(public platform: Platform, public navParams: NavParams,
              public viewCtrl: ViewController) {
    console.log(navParams.get('teste'));
  }
  
  anotacao = {}
  logForm() {
    console.log(this.anotacao)
  }

  modalCloseClickEvent() {
    this.viewCtrl.dismiss();
  }

}
