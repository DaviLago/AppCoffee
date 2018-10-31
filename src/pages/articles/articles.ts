import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

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

    private item: any;
    private articles: Array<ArticleModel>;
    private EmptyListMessage: String;

    constructor(public navCtrl: NavController, public navParams: NavParams, public articleService: ArticleService) {
        this.item = navParams.get('item');
        this.getAllArticlesByTheme(this.item.theme);
    }

    public getAllArticlesByTheme(theme: Theme){
        this.articleService.getAllArticlesByTheme(theme)
          .subscribe(
            (data) => {
                this.articles = data;
                if(data.length === 0)
                    this.EmptyListMessage = "Não há artigos com esse tema no momento...";
                else
                    this.EmptyListMessage = null;
            },
            (error:Error) => {
              console.log(error.message);
            }
          );
      }

    itemTapped(event, article) {
    this.navCtrl.push(ArticleDetailPage, {
        article: article,
        title: this.item.title
    });
    }

}