import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

//import { AnotacaoModel } from '../../../models/AnotacaoModel';
import { AnotacaoProvider } from '../../../providers/anotacaoProvider';

@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html'
})
export class AnotacaoModalPage {
  
  //private anotacaoModel: AnotacaoModel;
  private anotacao = {};

  constructor(public platform: Platform, public navParams: NavParams,
              public viewCtrl: ViewController, public anotacaoProvider: AnotacaoProvider) {
    this.anotacao = navParams.data;
  }
  
  logForm() {
    //console.log(this.anotacao);
    this.viewCtrl.dismiss(this.anotacao);
  }

  modalCloseClickEvent() {
    this.viewCtrl.dismiss(this.anotacao);
  }

}
