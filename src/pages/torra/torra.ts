import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ArticlesPage } from '../articles/articles';
import { Theme } from '../../enums/TemaEnum';

@Component({
  selector: 'torra-list',
  templateUrl: 'torra.html'
})
export class TorraListPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

   var torraClara = {
    title: 'Torra Clara' ,
    note: 'Descricao torra clara' ,
    icon: 'ios-cafe-outline',
    theme: Theme.TORRA_CLARA
  }
  var torraMedia = {
    title: 'Torra Media' ,
    note: 'Descricao torra Media' ,
    icon: 'ios-cafe-outline',
    theme: Theme.TORRA_MEDIA
  }
  var torraEscura = {
    title: 'Torra Escura' ,
    note: 'Descricao torra Escura' ,
    icon: 'ios-cafe-outline',
    theme: Theme.TORRA_ESCURA
  }

    this.items = [torraClara,torraMedia,torraEscura];
  }

  itemTapped(event, item) {
    this.navCtrl.setRoot(ArticlesPage, {
      item: item
    });
  }
}
