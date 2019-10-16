import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list-articles' },
  { path: 'list-articles', component: ListArticlesComponent },
  { path: 'article-details/:idArticle', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
