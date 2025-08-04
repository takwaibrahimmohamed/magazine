import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { NewsItem } from '../../core/models/newsItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css'],
  imports:[CommonModule]
})
export class NewsSliderComponent implements OnInit {
  news: NewsItem[] = [];
   
  constructor(private magazinservice:MagazineService) { }

  ngOnInit() {
this.getTopNews()
  }
  getTopNews(){
    this.magazinservice.getnews().subscribe((res: NewsItem[])=>{
      this.news = res
      

    })
  }
   


}
