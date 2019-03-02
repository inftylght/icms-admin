import {Component, OnInit} from '@angular/core';
import {CalculateListInterface} from '../interface/calculate-list-interface';
import {CalculateService} from '../../service/calculate.service';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-calculate-list',
  templateUrl: './calculate-list.component.html',
  styleUrls: ['./calculate-list.component.css']
})
export class CalculateListComponent implements OnInit {

  public calculateList: CalculateListInterface[];
  public displayedColumns: string[];

  constructor(
    private calculateService: CalculateService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCalculateList();
    this.displayedColumns = ['name', 'action'];
  }

  private async getCalculateList() {
    const calculateList: any = await this.calculateService.list();
    this.calculateList = calculateList.map((calculate) => {
      return {
        name: calculate.name,
        id: calculate.id,
        action: null
      };
    });
  }

  onDeleteClick(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '80%',
      maxWidth: '500px',
      data: {title: 'Are you sure for delete?', additional: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'ok') {
        const articleId = result.additional;
        this.calculateService.delete(articleId)
          .then(data => {
            this.getCalculateList();
          });
      }
    });
  }

}
