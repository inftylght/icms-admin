import {Component, OnInit} from '@angular/core';
import {CalculateListInterface} from '../interface/calculate-list-interface';
import {CalculateService} from '../../service/calculate.service';

@Component({
  selector: 'app-calculate-list',
  templateUrl: './calculate-list.component.html',
  styleUrls: ['./calculate-list.component.css']
})
export class CalculateListComponent implements OnInit {

  public calculateList: CalculateListInterface[];
  public displayedColumns: string[];

  constructor(private calculateService: CalculateService) {
  }

  async ngOnInit() {
    const calculateList: any = await this.calculateService.list();
    this.calculateList = calculateList.map((calculate) => {
      return {
        name: calculate.name,
        action: null
      };
    });
    this.displayedColumns = ['name', 'action'];
  }

}
