import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit, OnDestroy {

  private routerSubscription;
  private articleId;
  public contentText;
  public markdownOptions;
  public title;
  public onEdit;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.contentText = '';
    this.markdownOptions = {
      spellChecker: false
    };

    this.onEdit = () => {
      const request = {
        id: this.articleId,
        title: this.title,
        text: this.contentText
      };
      this.articleService.update(request)
        .then(data => {
          console.log(data);
        });
    };

    this.routerSubscription = this.activatedRoute.params.subscribe((param) => {
      this.articleId = param['id'];
      this.articleService.get(this.articleId)
        .then(data => {
          console.log(data);
          this.title = data.title;
          this.contentText = data.text;
        });
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
