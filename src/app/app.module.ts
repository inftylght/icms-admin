import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatRadioModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import {CalculateListComponent} from './component/calculate-list/calculate-list.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleEditComponent } from './component/article-edit/article-edit.component';
import {FormsModule} from '@angular/forms';
import {CovalentTextEditorModule} from '@covalent/text-editor';
import { ArticleCreateComponent } from './component/article-create/article-create.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { CalculateCreateComponent } from './component/calculate-create/calculate-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateListComponent,
    LoginComponent,
    ArticleListComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    ConfirmDialogComponent,
    CalculateCreateComponent
  ],
  imports: [
    MatRadioModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CovalentTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
