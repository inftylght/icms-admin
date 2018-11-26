import { Component, OnInit } from '@angular/core';
import {CalculateListInterface} from '../interface/calculate-list-interface';

@Component({
  selector: 'app-calculate-list',
  templateUrl: './calculate-list.component.html',
  styleUrls: ['./calculate-list.component.css']
})
export class CalculateListComponent implements OnInit {

  private calculateList: CalculateListInterface[];
  private displayedColumns: string[];

  constructor() {
  }

  ngOnInit() {
    this.calculateList = [
      {
        'name': 'การคำนวนดอกเบี้ยประกันกระเป๋าราย 7 ปี',
        'action': null
      },
      {
        'name': 'การคำนวนดอกเบี้ยประกันกระเป๋าราย 6 ปี',
        'action': null
      }
    ];
    this.displayedColumns = ['name', 'action'];
  }

}
