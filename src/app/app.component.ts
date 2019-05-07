import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ArticlesPage } from '../pages/articles/articles';
import { DiaryPage } from '../pages/diary/diary';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { Theme } from '../enums/TemaEnum';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, params?:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tipos de Torra', component: ArticlesPage, params: {theme:Theme.TIPOS_TORRA} },
      { title: 'Métodos de Preparo', component: ArticlesPage, params: {theme:Theme.METODO_PREPARO} },
      { title: 'Tipos de Grãos', component: ArticlesPage, params: {theme:Theme.TIPOS_GRAOS} },
      { title: 'Diário', component: DiaryPage },
      { title: 'Sair', component: LogoutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component, {
        params: page.params,
        title: page.title
    });
  }
}
