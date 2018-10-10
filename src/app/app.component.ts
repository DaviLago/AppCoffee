import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TorraListPage } from '../pages/torra/torra';
import { PreparoListPage } from '../pages/preparo/preparo';
import { GraoListPage } from '../pages/grao/grao';
import { DiarioPage } from '../pages/diario/diario';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Esqueci Senha', component: EsqueciSenhaPage },
      { title: 'Torra', component: TorraListPage },
      { title: 'Método de Preparo', component: PreparoListPage },
      { title: 'Grão', component: GraoListPage },
      { title: 'Diário', component: DiarioPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
