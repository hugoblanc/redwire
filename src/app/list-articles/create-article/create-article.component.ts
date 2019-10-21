import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }


  sendValue(): void {

    this.articleService.articles.push({...this.article});
  }


  voirValeur(inputRef) {
    console.log(inputRef);
  }
}
