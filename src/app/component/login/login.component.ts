import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private routter: Router
  ) { }

  ngOnInit() {
    console.log('Enter this page');
  }

  login() {
    this.routter.navigateByUrl('/article/list');
  }

}
