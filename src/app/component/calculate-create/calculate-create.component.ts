import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CalculateService} from '../../service/calculate.service';
import {MatSnackBar} from '@angular/material';
import {AuthenticateService} from '../../service/authenticate.service';

@Component({
  selector: 'app-calculate-create',
  templateUrl: './calculate-create.component.html',
  styleUrls: ['./calculate-create.component.css']
})
export class CalculateCreateComponent implements OnInit {

  public name;
  public nameEN;
  public formList;
  public formula;

  private static generateInputMetaData() {
    return JSON.parse(JSON.stringify({
      type: 'Number',
      name: null,
      nameEN: null,
      value: null,
      variable: null,
      selectionList: []
    }));
  }

  private static generateSelectOptionMetaData() {
    return JSON.parse(JSON.stringify({
      nameTH: null,
      nameEN: null,
      value: null
    }));
  };

  constructor(
    private router: Router,
    private calculateService: CalculateService,
    private snack: MatSnackBar,
    private authenticateService: AuthenticateService
  ) {
  }

  ngOnInit() {
    this.authenticateService.checkAuthenticate();
    this.formList = [];
  }

  onNewForm() {
    this.formList = [
      ...this.formList,
      {
        ...JSON.parse(JSON.stringify(CalculateCreateComponent.generateInputMetaData()))
      }
    ];
  }

  onChangeForm(event, form) {
    form.type = event.value;
    form.value = null;
    form.selectionList = [CalculateCreateComponent.generateSelectOptionMetaData()];
  }

  onNewOption(form) {
    form.selectionList = [
      ...form.selectionList,
      CalculateCreateComponent.generateSelectOptionMetaData()
    ];
  }

  async onCreate() {
    const req = {
      name: this.name,
      nameEN: this.nameEN,
      forms: this.formList,
      formula: this.formula
    };
    try {
      await this.calculateService.create(req);
      this.snack.open(`Created`, 'dismiss', {duration: 9000});
      this.router.navigateByUrl('/calculate/list');
    } catch (error) {
      this.snack.open(`Can't create calculate.`, 'dismiss', {duration: 9000});
    }
  }

  removeForm(form) {
    const formIndex = this.formList.indexOf(form);
    this.formList.splice(formIndex, 1);
  }

  removeOption(optionList, option) {
    const optionIndex = optionList.indexOf(option);
    optionList.splice(optionIndex, 1);
  }

}
