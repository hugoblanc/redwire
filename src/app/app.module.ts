import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './list-articles/article/article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CreateArticleComponent } from './list-articles/create-article/create-article.component';




@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    ArticleComponent,
    CommentListComponent,
    ArticleDetailsComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
