import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ArticlesPage } from '../articles/articles';
import { Theme } from '../../enums/TemaEnum';

@Component({
  selector: 'preparo-list',
  templateUrl: 'preparo.html'
})
export class PreparoListPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

   var prensaFrancesa = {
    title: 'Prensa Francesa' ,
    note: 'Descricao da Prensa Francesa' ,
    icon: 'ios-water-outline',
    theme: Theme.METODO_PRENSA
  }
  var coadoHarioV60 = {
    title: 'Hario V60' ,
    note: 'Descricao da Hario V60' ,
    icon: 'ios-water-outline',
    theme: Theme.METODO_HARIO
  }
 
    this.items = [prensaFrancesa,coadoHarioV60];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.setRoot(ArticlesPage, {
      item: item
    });
  }
}
