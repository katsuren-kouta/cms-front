import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NEWSLIST_URL } from '../constant';
import { HeadLineData } from '../models/headLineData';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  constructor(private http:HttpClient) {

  }

  fetchNewsListTop():Observable<any>{
    return this.http.get(NEWSLIST_URL+ '?order=new&limit=5');
  }
}
