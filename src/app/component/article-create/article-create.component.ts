import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

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

  constructor(
    private articleService: ArticleService,
    private snack: MatSnackBar,
    private routter: Router
  ) {
  }

  ngOnInit() {
    this.contentText = '';
    this.markdownOptions = {
      spellChecker: false
    };

    this.onCreate = () => {
      const request = {
        title: this.title,
        text: this.contentText,
        titleEN: this.titleEN,
        textEN: this.contentTextEN
      };
      this.articleService.create(request)
        .then(data => {
          this.snack.open(`Created`, 'dismiss', {duration: 9000});
        })
        .catch(error => {
          this.snack.open(`Can't create article.`, 'dismiss', {duration: 9000});
        });
    };
  }

}
