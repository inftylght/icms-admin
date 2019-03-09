import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthenticateService} from '../../service/authenticate.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  public contentText;
  public markdownOptions;
  public title;
  public onCreate;
  public titleEN;
  public contentTextEN;
  public youtube;

  constructor(
    private articleService: ArticleService,
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

    this.onCreate = () => {
      const request = {
        title: this.title,
        text: this.contentText,
        titleEN: this.titleEN,
        textEN: this.contentTextEN,
        youtube: this.youtube
      };
      this.articleService.create(request)
        .then(data => {
          this.snack.open(`Created`, 'dismiss', {duration: 9000});
          this.router.navigateByUrl('/article/list');
        })
        .catch(error => {
          this.snack.open(`Can't create article.`, 'dismiss', {duration: 9000});
        });
    };
  }

}
