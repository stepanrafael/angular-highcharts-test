import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TableComponent } from './shared/table/table.component';
import { SubtableComponent } from './shared/subtable/subtable.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { MiniPieComponent } from './shared/mini-pie/mini-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    SubtableComponent,
    MiniPieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
