import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
   this.articles = [
      new Article('Angular', 'http://angular.io', 5),
      new Article('Angular 2', 'http://angular.io', 35),
      new Article('Angular 3', 'http://angular.io', 8),
      ]; 
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log("Adding article: ${title.value} and link: ${link.value}");
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
