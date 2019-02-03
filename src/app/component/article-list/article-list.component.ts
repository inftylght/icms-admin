import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleListInterface} from '../interface/article-list-interface';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: ArticleListInterface[];
  private displayColumns: string[];

  public edit;

  constructor(
    private articleService: ArticleService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.articleList = [];
    this.articleService.list()
      .then(data => {
        data.forEach(article => {
          this.articleList.push({
            id: article.id,
            title: article.title,
            action: null
          });
        });
        this.articleList = [...this.articleList];
      })
    this.displayColumns = ['title', 'action'];

    this.edit = function (articleId) {
      this.routter.navigateByUrl('/article/list');
      console.log('edit=', articleId);
    };
  }
}
