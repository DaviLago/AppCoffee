import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ArticleModel } from '../../../models/ArticleModel';

@Component({
  selector: 'page-article',
  templateUrl: 'article-detail.html'
})
export class ArticleDetailPage {

    private article: ArticleModel;
    private title: String;

    constructor(public navParams: NavParams) {
        this.article = navParams.get('article');
        this.title = navParams.get("title");
    }

    public getArticle(): ArticleModel{
        return this.article;
    }

    public getTitle(): String{
        return this.title;
    }

}