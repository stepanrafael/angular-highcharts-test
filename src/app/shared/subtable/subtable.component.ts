import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import * as timeline from 'highcharts/modules/timeline';
import HC_timeline from 'highcharts/modules/timeline';

HC_timeline(Highcharts);

@Component({
  selector: 'app-subtable',
  templateUrl: './subtable.component.html',
  styleUrls: ['./subtable.component.scss']
})
export class SubtableComponent implements OnInit {
  @Input('params') params: any;
  Highcharts: typeof Highcharts = Highcharts;

  constructor() {
    this.dummyDataSeries(15, 16);
  }
  
  ngOnInit(): void {
    console.log("SUB TABLE PARAMS :: ", this.params);
    this.initGraph();
  }

  dataSeries:any = [];
  dummyDataSeries(hour, endHour){
    for(let min = 0; min <= 59; min+=1){
      this.dataSeries.push({
        packed: (()=>{
          if(hour == 15 && min < 30){
            return min * 2;
          }else if(hour == 15 && min > 30 && hour < 16){
            return min / 2;
          }else if(hour == 16 && min > 0 && min < 40){
            return 150;
          }else{
            return 100;
          }
        })(),
        failed: (()=>{
          if(hour == 15 && min < 30){
            return min;
          }else if(hour == 15 && min > 40 && hour < 16){
            return min / 1;
          }else if(hour == 15 && min > 30 && hour < 16){
            return min / 2;
          }else if(hour == 16 && min > 0 && min < 40){
            return 20;
          }else{
            return 10;
          }
        })(),
        date: Date.UTC(2022, 1, 1, hour, min)
      });
      if(min == 59){
        let nextHour = hour + 1;
        if(nextHour <= endHour){
          this.dummyDataSeries(nextHour, endHour);
        }else{
          return this.dataSeries;
        }
      }
    }
  }

  chartOptions;
  initGraph(){
    this.chartOptions = {
      chart: {
        type: "line"
      },
      title: {
        text: ""
      },
      subtitle: {
        text: ""
      },
      xAxis: [{
        endOnTick: false,
        maxPadding: 0.025,
        minPadding: 0.025,
        gridLineWidth: 0,
        tickWidth: 0,
        lineWidth: 0,
        type: "datetime",
        tickInterval: 1800,
        visible: true,
        crosshair: {
          width: 1,
          color: "#415D77",
          dashStyle: "Dash"
        },
        labels: {
          staggerLines: 1,
          enabled: true,
          formatter: function(arg) {
            return Highcharts.dateFormat('%H:%M', arg.value);
          }
        },
        height: "100%"
      }],
      yAxis: [{
        tickInterval: 60,
        gridLineColor: "#F3F3F3",
        labels: {
          formatter: function(arg) {
            return arg.value > 0 ? arg.value.toString() + "pcs/min" : "0";
          },
          style: {
            color: "#7E848A"
          }
        },
        title:{
          text: ""
        },
        height: "75%" 
      },{
        alternateGridColor: "#F9F9FA",
        gridLineWidth: 1, 
        gridLineColor: "#EAEBED",
        top: "80%",
        height: "20%",
        labels: {
          enabled: false
        },
        title:{
          text: ""
        },
        className: "timeline",
      }],
      plotOptions: {
        series: {
          timeline: {
            dataLabels: {
              enabled: true,
              borderWidth: 0,
              borderColor: "#fff000",
            },
          },
          dataLabels: {
            enabled: false
          },
          states: {
            inactive: {
                opacity: 1
            },
            hover: {
              halo: {
                opacity: 0
              }
            }
          }
        }
      },
      exporting: false,
      legend: {
        enabled: false
      },
      tooltip: {
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
        formatter: function(tooltip){
          // console.log("formtter tooltip : ", tooltip, this);
          let status = "danger";
          return `
            <div class="custom-tooltip ${status}">
              <div class="header">
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
        }
      },
      series: [{
        type: "timeline",
        name: "timeline",
        yAxis: 1,
        data: (()=>{
          return this.dataSeries.map(i => ({
            x: i.date,
            marker: {
              lineWidth: 1,
              lineColor: "#F9F9FA",
              fillColor: (()=>{
                if(i.failed == i.packed){
                  return '#FFBF00';
                }else if(i.failed > i.packed){
                  return '#BA253C';
                }else if(i.packed){
                  return '#008E62';
                }else{
                  return "#fff";
                }
              })()
            }
          }));
        })()
      },{
        type: "line",
        color: "#7191B1",
        lineWidth: 4,
        name: "packed",
        marker: {
          enabled: false
        },
        shadow: {
          color: "rgba(0,0,0,0.15)",
          width: 15,
          offsetX: 0,
          offsetY: 4
        },
        data: (()=>{
          return this.dataSeries.map(i => ([i.date, i.packed]));
        })()
      },{
        type: "line",
        color: "#FEDFDF",
        lineWidth: 2,
        name: "failed",
        marker: {
          enabled: false
        },
        shadow: false,
        data: (()=>{
          return this.dataSeries.map(i => ([i.date, i.failed]));
        })()
      }]
    };
  }

  dummyDataSet(){
    return [{
      date: Date.UTC(2022, 1, 1, 15, 0),
      failed: 0,
      packed: 20
    },{
      date: Date.UTC(2022, 1, 1, 15, 10),
      failed: 0,
      packed: 40
    },{
      date: Date.UTC(2022, 1, 1, 15, 20),
      failed: 0,
      packed: 80
    },{
      date: Date.UTC(2022, 1, 1, 15, 30),
      failed: 20,
      packed: 150
    },{
      date: Date.UTC(2022, 1, 1, 15, 40),
      failed: 60,
      packed: 20
    },{
      date: Date.UTC(2022, 1, 1, 15, 50),
      failed: 0,
      packed: 140
    },{
      date: Date.UTC(2022, 1, 1, 16, 0),
      failed: 0,
      packed: 160
    },{
      date: Date.UTC(2022, 1, 1, 16, 10),
      failed: 10,
      packed: 140
    },{
      date: Date.UTC(2022, 1, 1, 16, 20),
      failed: 20,
      packed: 120
    },{
      date: Date.UTC(2022, 1, 1, 16, 30),
      failed: 30,
      packed: 110
    },{
      date: Date.UTC(2022, 1, 1, 16, 40),
      failed: 30,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 16, 50),
      failed: 30,
      packed: 90
    },{
      date: Date.UTC(2022, 1, 1, 17, 0),
      failed: 30,
      packed: 60
    },{
      date: Date.UTC(2022, 1, 1, 17, 10),
      failed: 40,
      packed: 40
    },{
      date: Date.UTC(2022, 1, 1, 17, 20),
      failed: 30,
      packed: 30
    },{
      date: Date.UTC(2022, 1, 1, 17, 30),
      failed: 20,
      packed: 20
    },{
      date: Date.UTC(2022, 1, 1, 17, 40),
      failed: 30,
      packed: 20
    },{
      date: Date.UTC(2022, 1, 1, 17, 50),
      failed: 10,
      packed: 20
    },{
      date: Date.UTC(2022, 1, 1, 18, 0),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 18, 10),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 18, 20),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 18, 30),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 18, 40),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 18, 50),
      failed: 0,
      packed: 100
    },{
      date: Date.UTC(2022, 1, 1, 19, 0),
      failed: 0,
      packed: 100
    }]
  }

}
