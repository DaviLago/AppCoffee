import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'torra.html'
})
export class TorraPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

   var torraClara = {
    title: 'Torra Clara' ,
    note: 'Descricao torra clara' ,
    icon: 'ios-cafe-outline'
  }
  var torraMedia = {
    title: 'Torra Media' ,
    note: 'Descricao torra Media' ,
    icon: 'ios-cafe-outline'
  }
  var torraEscura = {
    title: 'Torra Escura' ,
    note: 'Descricao torra Escura' ,
    icon: 'ios-cafe-outline'
  }

    this.items = [torraClara,torraMedia,torraEscura];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TorraPage, {
      item: item
    });
  }
}
