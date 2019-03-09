import {Component, OnInit} from '@angular/core';
import {CalculateService} from '../../service/calculate.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthenticateService} from '../../service/authenticate.service';

@Component({
  selector: 'app-calculate-edit',
  templateUrl: './calculate-edit.component.html',
  styleUrls: ['./calculate-edit.component.css']
})
export class CalculateEditComponent implements OnInit {

  private calculateId;
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
    private calculateService: CalculateService,
    private activatedRoute: ActivatedRoute,
    private snack: MatSnackBar,
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
  }

  ngOnInit() {
    this.authenticateService.checkAuthenticate();
    this.activatedRoute.params.subscribe((param) => {
      this.calculateId = param['id'];
      this.calculateService.get(this.calculateId)
        .then(data => {
          const calculate: any = data;
          this.name = calculate.name;
          this.nameEN = calculate.nameEN;
          this.formula = calculate.formula;
          this.formList = [];
          for (const form of calculate.forms) {
            const tmpForm = CalculateEditComponent.generateInputMetaData();
            tmpForm.type = form.type;
            tmpForm.name = form.name;
            tmpForm.nameEN = form.nameEN;
            tmpForm.variable = form.variable;
            if (form.type === 'Selection') {
              tmpForm.selectionList = [];
              const selectionList = JSON.parse(form.config);
              for (const selection of selectionList) {
                tmpForm.selectionList.push({
                  name: selection.name,
                  nameEN: selection.nameEN,
                  value: selection.value
                });
              }
            }
            this.formList.push(tmpForm);
          }

        });
    });
  }

  onNewOption(form) {
    form.selectionList = [
      ...form.selectionList,
      CalculateEditComponent.generateSelectOptionMetaData()
    ];
  }

  onChangeForm(event, form) {
    form.type = event.value;
    form.value = null;
    form.selectionList = [CalculateEditComponent.generateSelectOptionMetaData()];
  }

  onNewForm() {
    this.formList = [
      ...this.formList,
      {
        ...JSON.parse(JSON.stringify(CalculateEditComponent.generateInputMetaData()))
      }
    ];
  }

  async onEdit() {
    const req = {
      id: this.calculateId,
      name: this.name,
      nameEN: this.nameEN,
      forms: this.formList,
      formula: this.formula
    };
    try {
      await this.calculateService.update(req);
      this.snack.open(`Updated`, 'dismiss', {duration: 9000});
      this.router.navigateByUrl('/calculate/list');
    } catch (error) {
      this.snack.open(`Can't update calculate.`, 'dismiss', {duration: 9000});
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
