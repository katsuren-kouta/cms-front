import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { RankingComponent } from './ranking/ranking.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminTopComponent } from './admin-top/admin-top.component';
import { AdminNewsCreateComponent } from './admin-news-create/admin-news-create.component';
import { AdminNewsEditComponent } from './admin-news-edit/admin-news-edit.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: TopComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
