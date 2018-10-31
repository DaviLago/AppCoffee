import { Theme } from "../enums/TemaEnum";

export class ArticleModel {
    public id;
    public title: string;
    public theme: Theme;
    public article: string;
}