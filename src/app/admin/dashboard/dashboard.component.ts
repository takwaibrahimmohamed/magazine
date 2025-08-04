import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../core/models/newsItem';
import { MagazineService } from '../../core/services/magazine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[CommonModule]
})
export class DashboardComponent implements OnInit {
  news: NewsItem[] = [];
  totalNews = 0;
  lastAddedDate = '';
  constructor(private magazinservice:MagazineService) { }

  ngOnInit() {
    this.magazinservice.getnews().subscribe(data => {
      this.news = data;
      this.totalNews = data.length;
      this.lastAddedDate = this.getLatestDate(data);
    });
  }
 getLatestDate(news: NewsItem[]) {
    return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0].date;
  }
}
