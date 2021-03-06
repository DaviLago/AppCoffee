import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ArticlesPage } from '../articles/articles';
import { Theme } from '../../enums/TemaEnum';

@Component({
  selector: 'page-grao-list',
  templateUrl: 'grao.html'
})
export class GraoListPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedItem = navParams.get('item');

    var arabica = {
      title: 'Grão Arábica' ,
      note: 'Descricao do Grão Arábica' ,
      icon: 'ios-leaf-outline',
      theme: Theme.GRAO_ARABICA
    }
    var robusta = {
      title: 'Grão Robusta' ,
      note: 'Descricao do Grão Robusta' ,
      icon: 'ios-leaf-outline',
      theme: Theme.GRAO_ROBUSTA
    }
  
    this.items = [arabica,robusta];
  }

  itemTapped(event, item) {
    this.navCtrl.setRoot(ArticlesPage, {
      item: item
    });
  }
}