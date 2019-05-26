import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ArticlesPage } from '../articles/articles';
import { DiaryPage } from '../diary/diary';
import { Theme } from '../../enums/TemaEnum';

//Service
import { UserService } from '../../services/userService';

//Model
import { UserModel } from '../../models/UserModel';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: UserModel = UserService.getUser();
  pages: Array<{title: string, component: any, params?:any, image: string}>;

  constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl: ToastController, public navParams: NavParams) {
    this.pages = [
      { title: 'Torras', component: ArticlesPage, params: {theme:Theme.TIPOS_TORRA}, image: 'assets/imgs/grao.png' },
      { title: 'Preparos', component: ArticlesPage, params: {theme:Theme.METODO_PREPARO}, image: 'assets/imgs/prensa.png' },
      { title: 'Grãos', component: ArticlesPage, params: {theme:Theme.TIPOS_GRAOS}, image: 'assets/imgs/flor.png' },
      { title: 'Diário', component: DiaryPage, image: 'assets/imgs/filtro.png' }
    ];
  }

  setUser(user:UserModel){
    this.user = user;
  }
  getUser(){
    return this.user;
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
    this.navCtrl.push(page.component, {
        params: page.params,
        title: page.title
    });
  }

  logout(){
    this.navCtrl.setRoot(LogoutPage);
  }

}
