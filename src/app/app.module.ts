import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TorraPage } from '../pages/torra/torra';
import { PreparoPage } from '../pages/preparo/preparo';
import { ListPage } from '../pages/list/list';
import { DiarioPage } from '../pages/diario/diario';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TorraPage,
    PreparoPage,
    ListPage,
    DiarioPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TorraPage,
    PreparoPage,
    ListPage,
    DiarioPage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
