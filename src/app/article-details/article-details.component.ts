import { Article } from './../models/article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {


  articles: Article[] = [
    {
      title: 'What is an API? In English, please.',
      imageUrl: 'https://miro.medium.com/max/3090/1*F8R-PEI9iVJ-sY3qFZemCg.png',
      commentList: [],
      // tslint:disable-next-line: max-line-length
      description: 'Before I learned software development, API sounded like a kind of beer. Today I use the term so often that I have in fact recently tried to order an API at a bar. The bartender’s response was to throw a 404: resource not found. I meet lots of people, both working in tech and elsewhere, who have a rather vague or incorrect idea about what this fairly common term means. Technically, API stands for Application Programming Interface. At some point or another, most large companies have built APIs for their customers, or for internal use. But how do you explain API in plain English? And is there a broader meaning than the one used in development and business? First, let’s pull back and look at how the web itself works.'
    },
    {
      title: 'What is an API? In English, please.',
      imageUrl: 'https://miro.medium.com/max/4410/1*D0Hsah4BwlChELXjiT7L1g.jpeg',
      commentList: [],
      // tslint:disable-next-line: max-line-length
      description: 'Before I learned software development, API sounded like a kind of beer. Today I use the term so often that I have in fact recently tried to order an API at a bar. The bartender’s response was to throw a 404: resource not found. I meet lots of people, both working in tech and elsewhere, who have a rather vague or incorrect idea about what this fairly common term means. Technically, API stands for Application Programming Interface. At some point or another, most large companies have built APIs for their customers, or for internal use. But how do you explain API in plain English? And is there a broader meaning than the one used in development and business? First, let’s pull back and look at how the web itself works.'
    },
    {
      title: 'What is an API? In English, please.',
      imageUrl: 'https://miro.medium.com/max/4264/1*PFDIsGlJDh_HY2EqWP2zcw.jpeg',
      commentList: [],
      // tslint:disable-next-line: max-line-length
      description: 'Before I learned software development, API sounded like a kind of beer. Today I use the term so often that I have in fact recently tried to order an API at a bar. The bartender’s response was to throw a 404: resource not found. I meet lots of people, both working in tech and elsewhere, who have a rather vague or incorrect idea about what this fairly common term means. Technically, API stands for Application Programming Interface. At some point or another, most large companies have built APIs for their customers, or for internal use. But how do you explain API in plain English? And is there a broader meaning than the one used in development and business? First, let’s pull back and look at how the web itself works.'
    }
  ];



  article: Article;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const idArticle = parseInt(params.get('idArticle'), 10);

      this.article = this.articles[idArticle];
    });

  }

}
