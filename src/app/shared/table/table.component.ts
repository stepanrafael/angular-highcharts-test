import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data = [{
    id: 1,
    expanded: false,
    title: "Flow Wrapper",
    status: "production",
    duration: "4h 31m",
    pieces_per_min: 134,
    machine_rejects: "1,6%",
    chart: {
      running: "78%",
      failed: "2%",
      disconnected: "0%",
      waiting: "34%",
      canceled: "12%",
    }
  },{
    id: 2,
    expanded: false,
    title: "Lucika Flow Wrapper",
    status: "production",
    duration: "4h 31m",
    pieces_per_min: 134,
    machine_rejects: "1,6%",
    chart: {
      running: "78%",
      failed: "2%",
      disconnected: "0%",
      waiting: "34%",
      canceled: "12%",
    }
  },{
    id: 3,
    expanded: false,
    title: "Another Flow Wrapper",
    status: "production",
    duration: "4h 31m",
    pieces_per_min: 134,
    machine_rejects: "1,6%",
    chart: {
      running: "78%",
      failed: "2%",
      disconnected: "0%",
      waiting: "34%",
      canceled: "12%",
    }
  }]

  constructor() { }

  ngOnInit(): void {
  }

  expand(row){
    row.expanded = !row.expanded;
  }
}
