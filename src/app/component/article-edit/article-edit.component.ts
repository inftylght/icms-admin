import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  private simpleMDE;
  public contentText= '';

  constructor() { }

  ngOnInit() {
  }

}
