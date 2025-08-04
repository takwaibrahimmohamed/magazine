import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { Router } from '@angular/router';
import { NewsItem } from '../../core/models/newsItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Add_news',
  templateUrl: './Add_news.component.html',
  styleUrls: ['./Add_news.component.css'],
  
   imports:[CommonModule,FormsModule]
})
export class Add_newsComponent implements OnInit {
 newsItem: NewsItem = {
    id: 0,
    title: '',
    description: '',
    image:"",
    date: ''
  };
 constructor(private magazineService: MagazineService, private router: Router) {}


  ngOnInit() {
  }
  
  onSubmit() {
    const currentNews = this.magazineService.getLocalNewsItems();
    const newId = currentNews.length > 0 ? Math.max(...currentNews.map(n => n.id)) + 1 : 1;
   const newNews: NewsItem = { ...this.newsItem, id: newId };


  this.magazineService.addNewsItem(newNews);
    this.router.navigate(['admin/news']);
  }

}
