import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtable',
  templateUrl: './subtable.component.html',
  styleUrls: ['./subtable.component.scss']
})
export class SubtableComponent implements OnInit {
  @Input('params') params: any;

  constructor() { }

  ngOnInit(): void {
    console.log("Subtable for :: ", this.params);
  }

}
