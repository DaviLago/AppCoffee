import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

//Providers
import { AnotacaoProvider } from '../providers/anotacaoProvider';
import { urlProvider } from '../providers/urlProvider';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DiarioPage } from '../pages/diario/diario';

//Models
import { AnotacaoModalPage } from '../pages/diario/CRUD/anotacao';


//Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DiarioPage,
    AnotacaoModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DiarioPage,
    AnotacaoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnotacaoProvider,
    urlProvider
  ]
})
export class AppModule {}
