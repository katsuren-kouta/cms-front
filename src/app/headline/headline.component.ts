import { Component, Input, OnInit } from '@angular/core';
import { HeadLineData } from '../shared/models/headLineData';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  @Input() headLine:HeadLineData;
  @Input() rank:number;
  constructor() { }

  ngOnInit(): void {
  }

}
