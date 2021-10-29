import { CountsService } from './../service/counts.service';
import { Component } from '@angular/core';
import { barChartOptions } from './config/barchart.options';
import { BarChartDataset } from '../model/BarChartDataset';
import { Input } from '@angular/core';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarGraphComponent {

  chartOptions: ChartOptions ;
  colors = [{ backgroundColor:barChartOptions.dataConfiguration.fontColor }];
  chartLabels: string[] = [];
  ChartDataSets: BarChartDataset[] = [];

    constructor(private _countsService: CountsService) { 
      this.chartOptions = barChartOptions;
    }

    CallApi_getCountsPerDay(dateFrom: string,dateto: string) {
      this._countsService.getCountsPerDay(dateFrom,dateto).subscribe((data) => {

        this.chartLabels =[];
        this.ChartDataSets[0].data =[];
        for(var i = 0, len = data.length; i < len; i++) 
        {
          this.chartLabels.push(data[i].date);
          this.ChartDataSets[0].data.push(data[i].count);
        }
      },
        error => {
          console.log(error);
        });
    }

}
