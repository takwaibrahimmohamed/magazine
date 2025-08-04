import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { NewsItem } from '../../core/models/newsItem';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-News',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.css'],
  imports: [ CardComponent,CommonModule]
})
export class NewsComponent implements OnInit {

  constructor(private magazinservice:MagazineService) { }
  news: NewsItem[] = [];
  ngOnInit() {
this.getTopNews()
  }
  getTopNews(){
    this.magazinservice.getnews().subscribe((res: NewsItem[])=>{
      this.news = res
      

    })
  }
   
}
