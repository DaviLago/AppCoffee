import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, AlertController  } from 'ionic-angular';
import { AnnotationModalPage } from './annotation/annotation';

//import { AnotacaoModel } from '../../models/AnotacaoModel';
import { AnnotationService } from '../../services/annotationService';

@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {
  private anotacoes: Array<any>;
  private cont: number;
  //private anotacoesModel: Array<AnotacaoModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
              public alertCtrl: AlertController, public annotationService: AnnotationService) {
    this.cont = 0;
    this.anotacoes = [];
    for (let i = 1; i < 6; i++) {
      this.anotacoes.push({
        id: "" + i,
        cafeteria: "cafeteria" + i,
	      cafe: "cafe" + i,
        barista: "barista" + i,
        harmonizacao: "harmonização" + i,
        complemento: "complemento" + i,
        preparo: "preparo" + i,
        descricao: "descrição" + i
      });
    }

    let anotacao = {
      id: "",
      cafe: "cafe",
      barista: "barista",
      harmonizacao: "harmonização",
      complemento: "complemento",
      preparo: "preparo",
      descricao: "descrição"
    };
    
    this.anotacoes.push(anotacao);

    //console.log(anotacaoProvider.getUrl());

  }
  
  anotationCreateClickEvent(e, anotacao) {
    this.presentModal(anotacao);
  }
  
  presentModal(anotacao) {
    const modal = this.modalCtrl.create(AnnotationModalPage, anotacao);
    modal.present();
    
    modal.onDidDismiss(anotacao => {
      if(anotacao.id){
        this.anotacoes.find(a => {
          a = anotacao;
          return a.id === anotacao.id;
        });
      }
      else{
        this.cont = this.cont + 1;
        anotacao.id = this.cont;
        this.anotacoes.push(anotacao);
      }
    });
    //console.log(this.anotacoes);
  }

  anotationDeleteClickEvent(e, anotacao){
    this.showConfirm(anotacao);
  }

  showConfirm(anotacao) {
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
            let index = this.anotacoes.findIndex(a => {return a.id === anotacao.id});
            this.anotacoes.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }
  
}
