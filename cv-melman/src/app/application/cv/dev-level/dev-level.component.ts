import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets} from 'chart.js';

// public API
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dev-level',
  templateUrl: './dev-level.component.html',
  styleUrls: ['./dev-level.component.css']
})
export class DevLevelComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true, 
    scales : {yAxes: [{
      ticks: {
          suggestedMin: 30,
          suggestedMax: 100
      }
    }]}
  };

  public barChartLabels: Label[] = ['Frontend', 'Backend', 'SGBD', 'Design'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
 
  public barChartData: ChartDataSets[] = [
    {data: [85, 75, 90, 60], backgroundColor: "#7FC5FF"}
  ];

  ngOnInit(): void { }

}
