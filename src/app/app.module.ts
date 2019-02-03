import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import {CalculateListComponent} from './component/calculate-list/calculate-list.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculateListComponent,
    LoginComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
