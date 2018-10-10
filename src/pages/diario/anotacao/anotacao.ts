import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

//import { AnotacaoModel } from '../../../models/AnotacaoModel';
import { AnnotationService } from '../../../services/annotationService';

@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html'
})
export class AnotacaoModalPage {
  
  //private anotacaoModel: AnotacaoModel;
  private annotation = {};

  constructor(public platform: Platform, public navParams: NavParams,
              public viewCtrl: ViewController, public annotationService: AnnotationService) {
    this.annotation = navParams.data;
  }
  
  logForm() {
    //console.log(this.anotacao);
    this.viewCtrl.dismiss(this.annotation);
  }

  modalCloseClickEvent() {
    this.viewCtrl.dismiss(this.annotation);
  }

}
