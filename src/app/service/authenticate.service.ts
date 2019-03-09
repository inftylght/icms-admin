import { Injectable } from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {ConfigService} from './config.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private username;
  private password;

  private usernameValidator;
  private passwordValidator;

  constructor(
    private routter: Router,
    private configService: ConfigService,
    private matSnack: MatSnackBar
  ) { }

  async checkConfigReady() {
    try {
      const config = await this.configService.getConfigMap();
      this.usernameValidator = config['USERNAME'];
      this.passwordValidator = config['PASSWORD'];
    } catch (error) {
      this.matSnack.open('Login Fail.', 'dismiss', {duration: 5000});
      this.routter.navigateByUrl('/login');
      throw error;
    }

  }

  async checkAuthenticate() {
    await this.checkConfigReady();
    if (
      this.usernameValidator !== this.username
      || this.passwordValidator !== this.password
    ) {
      this.matSnack.open('Not Authorize', 'dismiss', {duration: 5000});
      this.routter.navigateByUrl('/login');
    }
  }

  async login(username, password) {
    this.username = username;
    this.password = password;
    await this.checkConfigReady();
    if (
      this.usernameValidator === username
      && this.passwordValidator === password
    ) {
      this.matSnack.open('Login Success.', 'dismiss', {duration: 5000});
      this.routter.navigateByUrl('/article/list');
    } else {
      this.matSnack.open('Login Fail.', 'dismiss', {duration: 5000});
    }
  }
}
