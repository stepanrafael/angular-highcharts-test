import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-subtable',
  templateUrl: './subtable.component.html',
  styleUrls: ['./subtable.component.scss']
})
export class SubtableComponent implements OnInit {
  @Input('params') params: any;

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = { 
    chart: {
      type: "line"
    },
    title: {
       text: ""
    },
    subtitle: {
       text: ""
    },
    xAxis:{
      gridLineWidth: 1,
      gridLineColor: "#F3F3F3",
      gridLineDashStyle: "Dash",
      crosshair: {
        width: 1,
        color: "#415D77",
        dashStyle: "Dash"
      },
      lineColor: "#fff",
      categories: [],
      visible: false,
    },
    yAxis: {
      tickInterval: 60,
      gridLineColor: "#F3F3F3",
      labels: {
        formatter: function() {
          if(this.value == 0){
            return "";
          }else{
            return this.value.toString() + "pcs/min";
          }
        },
        style: {
          color: "#7E848A"
        }
      },
      title:{
        text: ""
      } 
    },
    tooltip: {
      positioner: function(width, _, point) {
        console.log(width, _, point);
        var plotX = point.plotX + width/3;
        return {
          x: plotX,
          y: point.plotY,
        };
      },
      outside: false,
      hideDelay: 0,
      snap: 1,
      followPointer: false,
      useHTML: true,
      borderRadius: 7,
      padding: 0,
      borderColor: "#fff",
      borderWidth: 0,
      shadow: false,
      className: "custom-tooltip",
      backgroundColor: "#fff",
      formatter: function(){
        console.log(this);
        if(this.point.y && this.point.y > 0){
          return `
            <div class="custom-tooltip">
              <div class="header danger">
                <span>Stopped by fault</span>
                <span class="duration">21min / 2h 45min</span>
              </div>
              <div class="content">
                <div class="flex-row" style="align-items: center;">
                  <img src="/assets/images/tooltip-warning.png" style="margin-right: 14px;" />
                  <div class="flex-column">
                    <div class="flex-row" style="align-items: baseline;">
                      <h1>26min</h1> <h2 style="margin-left: 4px;">in total</h2>
                    </div>
                    <p>Double package rejected </p>
                  </div>
                </div>
              </div>
              <div class="footer">22.04.2022 ; hh:mm</div>
            </div>
          `;
        }else{
          return false;
        }
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      scatter: {
        stickyTracking: false
      }
    },
    series: [
       {
          type: "line",
          color: "#7191B1",
          lineWidth: 4,
          name: "Pieces per min",
          data: [0, 120, 20, 150, 160, 140, 130, 70, 20, 100],
          marker: {
            enabled: false
          },
          shadow: {
            color: "rgba(0,0,0,0.15)",
            width: 15,
            offsetX: 0,
            offsetY: 4
          }
       },
       {
          type: "line",
          color: "#FEDFDF",
          lineWidth: 2,
          name: "Machine rejects",
          data: [0, 20, 50, 70, 10, 0, 10, 20, 30, 0],
          marker: {
            enabled: false
          },
          shadow: false
       }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    console.log("Subtable for :: ", this.params);
  }

}
