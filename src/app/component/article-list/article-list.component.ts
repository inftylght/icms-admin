import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleListInterface} from '../interface/article-list-interface';
import {ArticleService} from '../../service/article.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../service/authenticate.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articleList: ArticleListInterface[];
  public displayColumns: string[];

  public edit;
  public onDeleteClick;

  constructor(
    private articleService: ArticleService,
    private changeDetectorRefs: ChangeDetectorRef,
    private dialog: MatDialog,
    private authenticateService: AuthenticateService
  ) {
  }


  async getArticle() {
    const articleList: any = await this.articleService.list();
    this.articleList = articleList.map(article => {
      return {
        id: article.id,
        title: article.title,
        action: null
      };
    });
  }

  ngOnInit() {
    this.authenticateService.checkAuthenticate();
    this.articleList = [];

    this.getArticle();

    this.displayColumns = ['title', 'action'];

    this.onDeleteClick = (id) => {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '80%',
        maxWidth: '500px',
        data: {title: 'Are you sure for delete?', additional: id}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result.action === 'ok') {
          const articleId = result.additional;
          this.articleService.delete(articleId)
            .then(data => {
              this.getArticle();
            });
        }
      });
    };

    this.edit = function (articleId) {
      this.routter.navigateByUrl('/article/list');
    };
  }
}
