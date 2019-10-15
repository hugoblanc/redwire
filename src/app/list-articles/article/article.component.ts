import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  @Input() article: Article;

  commentValue: string;

  constructor() { }

  ngOnInit() {
  }


  addComment() {
    this.article.commentList.push(this.commentValue);
    this.commentValue = '';
  }

}
