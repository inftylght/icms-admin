import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalculateService} from '../../service/calculate.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-calculate-create',
  templateUrl: './calculate-create.component.html',
  styleUrls: ['./calculate-create.component.css']
})
export class CalculateCreateComponent implements OnInit {

  public name;
  public nameEN;
  public formList;

  private generateInputMetaData() {
    return JSON.parse(JSON.stringify({
      type: 'Number',
      name: null,
      nameEN: null,
      value: null,
      selectionList: []
    }));
  }

  constructor(
    private router: Router,
    private calculateService: CalculateService,
    private snack: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.formList = [];
  }

  onNewForm() {
    this.formList = [
      ...this.formList,
      {
        ...JSON.parse(JSON.stringify(this.generateInputMetaData()))
      }
    ];
  }

  onChangeForm(event, form) {
    form.type = event.value;
    form.value = null;
    form.selectionList = [];
  }

  async onCreate() {
    const req = {
      name: this.name,
      nameEN: this.nameEN,
      forms: this.formList
    };
    console.log('req', req);
    // try {
    //   await this.calculateService.create({
    //     name: this.name,
    //     nameEN: this.nameEN
    //   });
    //   this.snack.open(`Updated`, 'dismiss', {duration: 9000});
    //   this.router.navigateByUrl('/calculate/list');
    // } catch (error) {
    //   this.snack.open(`Can't update calculate.`, 'dismiss', {duration: 9000});
    // }
  }

}
