import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeadLineData } from '../shared/models/headLineData';
import { HeadlineService } from '../shared/services/headline.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  headLines:HeadLineData[];

  constructor(private headLineService:HeadlineService) { }

  ngOnInit(): void {
    this.headLineService.fetchNewsList().subscribe(
      (array:Observable<any>) =>
      this.headLines = this.makeHeadLineData(array)
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
