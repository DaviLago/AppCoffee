import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Providers
import { AnnotationService } from '../services/annotationService';
import { ArticleService } from '../services/articleService';
import { HomeService } from '../services/homeService';
import { Service } from '../services/service';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TorraListPage } from '../pages/torra/torra';
import { PreparoListPage } from '../pages/preparo/preparo';
import { GraoListPage } from '../pages/grao/grao';
import { DiaryPage } from '../pages/diary/diary';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';
import { AnnotationDetailPage } from '../pages/diary/annotation-detail/annotation-detail';
import { AnnotationFormModalPage } from '../pages/diary/annotation-form/annotation-form';
import { ArticlesPage } from '../pages/articles/articles';
import { ArticleDetailPage } from '../pages/articles/article-detail/article-detail';


//Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    TorraListPage,
    PreparoListPage,
    GraoListPage,
    DiaryPage,
    AnnotationDetailPage,
    AnnotationFormModalPage,
    ArticlesPage,
    ArticleDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    EsqueciSenhaPage,
    TorraListPage,
    PreparoListPage,
    GraoListPage,
    DiaryPage,
    AnnotationDetailPage,
    AnnotationFormModalPage,
    ArticlesPage,
    ArticleDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnnotationService,
    ArticleService,
    HomeService,
    Service
  ]
})
export class AppModule {}
