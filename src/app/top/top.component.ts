import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadLineData } from '../shared/models/headLineData';
import { HeadlineService } from '../shared/services/headline.service';
import { RankService } from '../shared/services/rank.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  headLines:HeadLineData[];
  rankList:HeadLineData[];

  constructor(private headLineService:HeadlineService,
    private rankService:RankService) { }

  ngOnInit(): void {
    this.headLineService.fetchNewsListTop().subscribe(
      (array:Observable<any>) =>
      this.headLines = this.makeHeadLineData(array)
    );

    this.rankService.fetchNewsListTop().subscribe(
      (array:Observable<any>) =>
      this.rankList = this.makeHeadLineData(array, true)
    );
  }

  makeHeadLineData(list:Observable<any>, isRank:boolean = false):HeadLineData[]{
    const result = [];
    const datalist = list['data'];
    datalist.forEach(data => {
      result.push(
        new HeadLineData(
          this.getImageUrl(data.html),
          data.id,
          data.title,
          data.created_at,
          isRank
        )
      )
    });

    return result;
  }

  getImageUrl(htmlCode:string):string{
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = htmlCode;
    const imagelist = div.getElementsByTagName('img');
    if (!!imagelist && imagelist.length !=0){
      return imagelist[0].src;
    }

    return '';
  }

}
