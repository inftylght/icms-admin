import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public youtubeToken;

  constructor(
    private configService: ConfigService,
    private snack: MatSnackBar
  ) {
  }

  async ngOnInit() {
    const configObj = await this.configService.getConfigMap();
    if (configObj) {
      this.youtubeToken = configObj['HOME.YOUTUBE.TOKEN'];
    }
  }

  private getConfig() {

  }

  async onUpdate() {
    const req = {
      'HOME.YOUTUBE.TOKEN': this.youtubeToken
    };
    try {
      await this.configService.update(req);
      this.snack.open(`Updated`, 'dismiss', {duration: 9000});
    } catch (error) {
      this.snack.open(`Can't update config.`, 'dismiss', {duration: 9000});
    }
  }

}
