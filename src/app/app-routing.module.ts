import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {CalculateListComponent} from './component/calculate-list/calculate-list.component';
import {ArticleListComponent} from './component/article-list/article-list.component';
import {ArticleEditComponent} from './component/article-edit/article-edit.component';
import {ArticleCreateComponent} from './component/article-create/article-create.component';
import {CalculateCreateComponent} from './component/calculate-create/calculate-create.component';
import {CalculateEditComponent} from './component/calculate-edit/calculate-edit.component';
import {ConfigComponent} from './component/config/config.component';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'calculate/list', component: CalculateListComponent},
  {path: 'calculate/create', component: CalculateCreateComponent},
  {path: 'calculate/edit/:id', component: CalculateEditComponent},
  {path: 'article/list', component: ArticleListComponent},
  {path: 'article/create', component: ArticleCreateComponent},
  {path: 'article/edit/:id', component: ArticleEditComponent},
  {path: 'config', component: ConfigComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
