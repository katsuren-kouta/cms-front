import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { TopComponent } from './top/top.component';
import { RankingComponent } from './ranking/ranking.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminTopComponent } from './admin-top/admin-top.component';
import { AdminNewsCreateComponent } from './admin-news-create/admin-news-create.component';
import { AdminNewsEditComponent } from './admin-news-edit/admin-news-edit.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    TopComponent,
    RankingComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    AdminLoginComponent,
    AdminTopComponent,
    AdminNewsCreateComponent,
    AdminNewsEditComponent,
    AdminConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
