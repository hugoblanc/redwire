import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();

  constructor() { }

  ngOnInit() {
  }


  sendValue(): void {
    console.log(this.article);
  }


  voirValeur(inputRef) {
    console.log(inputRef);
  }
}
