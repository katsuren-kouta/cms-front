import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeadLineData } from '../shared/models/headLineData';
import { RankService } from '../shared/services/rank.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  headLines:HeadLineData[];
  title:string;

  constructor(private rankService:RankService, private route:ActivatedRoute)
  {
    route.params.subscribe(val => {
      // パラメータ取得
      const order = this.route.snapshot.paramMap.get('order');
      if(order === 'week'){
        this.title = '週間';
        this.rankService.fetchNewsListWeek().subscribe(
          (array:Observable<any>) =>
          this.headLines = this.makeHeadLineData(array['data'], true)
        );
      } else if(order === 'all'){
        this.title = '総合';
        this.rankService.fetchNewsListAll().subscribe(
          (array:Observable<any>) =>
          this.headLines = this.makeHeadLineData(array['data'], true)
        );
      }
    });
  }

  ngOnInit(): void {

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
