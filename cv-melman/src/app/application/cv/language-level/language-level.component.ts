import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-language-level',
  templateUrl: './language-level.component.html',
  styleUrls: ['./language-level.component.css']
})
export class LanguageLevelComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true, 
    scales : {yAxes: [{
      ticks: {
          suggestedMin: 0,
          suggestedMax: 10
      }
    }]},
  };

  public barChartLabels: Label[] = ['Compréhension', 'Communication', 'Ecrit'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
 
  public barChartData: ChartDataSets[] = [
    {data: [10, 9, 10], label: 'Francais', backgroundColor: "#7FC5FF"},
    {data: [8, 3, 5], label: 'Anglais', backgroundColor: "#0274B3"},
  ];

  ngOnInit(): void { }

}
