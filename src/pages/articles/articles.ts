import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController, Loading } from 'ionic-angular';

//Service
import  { ArticleService } from '../../services/articleService';

//Model
import { ArticleModel } from '../../models/ArticleModel';
import { Theme } from '../../enums/TemaEnum';
import { ArticleDetailPage } from './article-detail/article-detail';

@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html'
})
export class ArticlesPage {

    private params: any;
    private title: any;
    private articles: Array<ArticleModel>;
    private EmptyListMessage: String;
    private loading: Loading;

    constructor(public navCtrl: NavController, public navParams: NavParams, public articleService: ArticleService, public loadingCtrl: LoadingController) {
        this.params = navParams.get('params');
        this.title = navParams.get('title');
        this.getAllArticlesByTheme(this.params.theme);
    }

    public getArticles(): Array<ArticleModel>{
        return this.articles;
    }

    public getEmptyListMessage(): String{
        return this.EmptyListMessage
    }

    public getAllArticlesByTheme(theme: Theme){
        this.openLoading();
        this.articleService.getAllArticlesByTheme(theme)
          .subscribe(
            (data) => {
                this.articles = data;
                if(data.length === 0)
                    this.EmptyListMessage = "Não há artigos com esse tema no momento...";
                else
                    this.EmptyListMessage = null;
                this.closeLoading();
            },
            (error:Error) => {
                this.EmptyListMessage = "Erro ao carregar...";
                this.closeLoading();
            }
        );
    }

    itemTapped(event, article) {
        this.navCtrl.push(ArticleDetailPage, {
            article: article,
            title: this.title
        });
    }

    openLoading(){
        this.loading = this.loadingCtrl.create();
        this.loading.present();
      }
    
      closeLoading() {
        this.loading.dismiss();
      }

}