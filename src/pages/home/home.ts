import { Component } from '@angular/core';
import { NavController, ToastController, Nav, NavParams } from 'ionic-angular';
import { ArticlesPage } from '../articles/articles';
import { DiaryPage } from '../diary/diary';
import { Theme } from '../../enums/TemaEnum';

//Service
import { UserService } from '../../services/userService';

//Model
import { UserModel } from '../../models/UserModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: UserModel;
  pages: Array<{title: string, component: any, params?:any}>;

  constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl: ToastController, public navParams: NavParams) {
    this.user = UserService.getUser();
    // this.user  = navParams.get('user');

    this.pages = [
      { title: 'Torras', component: ArticlesPage, params: {theme:Theme.TIPOS_TORRA}, image: '../assets/imgs/grao.png' },
      { title: 'Métodos de Preparo', component: ArticlesPage, params: {theme:Theme.METODO_PREPARO}, image: '../assets/imgs/prensa.png' },
      { title: 'Tipos de Grãos', component: ArticlesPage, params: {theme:Theme.TIPOS_GRAOS}, image: '../assets/imgs/flor.png' },
      { title: 'Diário', component: DiaryPage, image: '../assets/imgs/filtro.png' }
    ];

    // this.presentToast("User token: " + UserService.getUser().token);
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 7000,
      position: 'bottom'
    });  
    toast.present();
  }

  openPage(page) {
    this.navCtrl.setRoot(page.component, {
        params: page.params,
        title: page.title
    });
  }

}
