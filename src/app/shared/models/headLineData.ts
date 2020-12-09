export class HeadLineData{
  image_url:string;
  id:string;
  title:string;
  date:string;
  isRank:boolean;

  constructor(image_url:string, id:string, title:string, date:string,isRank:boolean){
    this.image_url = image_url;
    this.id = id;
    this.title = title;
    this.date = date;
    this.isRank = isRank;
  }
}
