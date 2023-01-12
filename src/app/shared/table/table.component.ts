import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('params') params:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  accordion = true;
  expand(row){
    if(this.accordion){
      this.params.forEach((item)=>{
        item.expanded = row.id !== item.id ? false : !item.expanded;
      });
    }else{
      row.expanded = !row.expanded;
    }
  }
}
