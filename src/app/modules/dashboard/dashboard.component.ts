import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data = [{
    id: 1,
    expanded: true,
    title: "Flow Wrapper",
    status: "production",
    duration: "4h 31m",
    pieces_per_min: 134,
    machine_rejects: "2,6%",
    chart: {
      running: 78,
      failed: 20,
      lost: 0,
      waiting: 34,
      canceled: 20,
    }
  },{
    id: 2,
    expanded: false,
    title: "Lucika Flow",
    status: "production",
    duration: "3h 23m",
    pieces_per_min: 156,
    machine_rejects: "1,3%",
    chart: {
      running: 8,
      failed: 2,
      lost: 0,
      waiting: 4,
      canceled: 20,
    }
  },{
    id: 3,
    expanded: false,
    title: "Another Flow",
    status: "production",
    duration: "2h 11m",
    pieces_per_min: 144,
    machine_rejects: "0,6%",
    chart: {
      running: 20,
      failed: 40,
      lost: 0,
      waiting: 34,
      canceled: 20,
    }
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
