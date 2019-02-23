import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleListInterface} from '../interface/article-list-interface';
import {ArticleService} from '../../service/article.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';

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
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.articleList = [];

    const getArticle = () => {
      const articleList = [];
      this.articleService.list()
        .then(data => {
          for (const article of data) {
            articleList.push({
              id: article.id,
              title: article.title,
              action: null
            });
          }
          this.articleList = [...articleList];
        });
    };
    getArticle();

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
              getArticle();
            });
        }
      });
    };

    this.edit = function (articleId) {
      this.routter.navigateByUrl('/article/list');
      console.log('edit=', articleId);
    };
  }
}
