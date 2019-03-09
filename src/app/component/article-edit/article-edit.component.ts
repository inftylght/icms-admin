import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthenticateService} from '../../service/authenticate.service';

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
  public titleEN;
  public contentTextEN;
  public youtube;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private snack: MatSnackBar,
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
  }

  ngOnInit() {
    this.authenticateService.checkAuthenticate();
    this.contentText = '';
    this.markdownOptions = {
      spellChecker: false
    };

    this.onEdit = () => {
      const request = {
        id: this.articleId,
        title: this.title,
        text: this.contentText,
        titleEN: this.titleEN,
        textEN: this.contentTextEN,
        youtube: this.youtube
      };
      this.articleService.update(request)
        .then(data => {
          this.snack.open(`Updated`, 'dismiss', {duration: 9000});
          this.router.navigateByUrl('/article/list');
        })
        .catch(error => {
          this.snack.open(`Can't update article.`, 'dismiss', {duration: 9000});
        });
    };

    this.routerSubscription = this.activatedRoute.params.subscribe((param) => {
      this.articleId = param['id'];
      this.articleService.get(this.articleId)
        .then(data => {
          const result: any = data;
          this.title = result.title;
          this.contentText = result.text;
          this.titleEN = result.titleEN;
          this.contentTextEN = result.textEN;
          this.youtube = result.youtube;
        });
    });
  }

  ngOnDestroy() {
    this
      .routerSubscription
      .unsubscribe();
  }

}
