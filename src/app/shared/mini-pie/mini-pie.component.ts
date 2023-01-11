import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-pie',
  templateUrl: './mini-pie.component.html',
  styleUrls: ['./mini-pie.component.scss']
})
export class MiniPieComponent implements OnInit {
  @Input('params') params:any = {};

  public datasets;
  public labels: string[] = ['Running', 'Failed', 'Lost', 'Waiting', 'Canceled'];
  public options = {
    responsive: true,
    cutout: 19,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    plugins: {
      tooltip: {
        enabled: false 
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.datasets = [{
      backgroundColor: ["#008E62", "#BA253C", "#7E848A", "#FFBF00", "#235689"],
      data: [
        this.params.chart.running,
        this.params.chart.failed,
        this.params.chart.lost,
        this.params.chart.waiting,
        this.params.chart.canceled,
      ]
    }];
  }

}
