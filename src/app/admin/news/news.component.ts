import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { NewsItem } from '../../core/models/newsItem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
    imports:[CommonModule,RouterLink]
})
export class NewsComponent implements OnInit {

 news: NewsItem[] = [];


  constructor(private magazinservice:MagazineService) { }

  ngOnInit() {
     const localData = this.magazinservice.getLocalNewsItems();
       if (localData.length > 0) {
        this.news = localData
       }else{
          this.magazinservice.getnews().subscribe(data => {
      this.news = data;
       this.magazinservice.setNewsItems(data); 
    });
       }
  
  }
deleteNews(id: number) {
  this.news = this.news.filter(item => item.id !== id);
}
}
