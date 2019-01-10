import { Component, OnInit } from '@angular/core';
import {ArticleListInterface} from '../interface/article-list-interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  private articleList: ArticleListInterface[];
  private displayColumns: string[];

  constructor() { }

  ngOnInit() {
    this.articleList = [
      {
        name: 'ทำยังไงถึงไม่โดนประกันหลอก',
        shortContent: 'ทำยังไงถึงไม่โดนประกันหลอก...',
        action: null
      },
      {
        name: 'ทำยังไงถึงคุ้มกับการทำประกันภัย',
        shortContent: 'ทำยังไงถึงคุ้มกับการทำประกันภัย...',
        action: null
      }
    ];
    this.displayColumns = ['name', 'shortContent', 'action'];
  }
}
