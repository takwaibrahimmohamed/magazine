import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/newsItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editNews',
  templateUrl: './editNews.component.html',
  styleUrls: ['./editNews.component.css'],
   imports:[CommonModule,FormsModule,RouterLink]
})
export class EditNewsComponent implements OnInit {
news: NewsItem | undefined;


  constructor(    private route: ActivatedRoute
,private magazinservice: MagazineService, private router: Router) { 
  
}


  ngOnInit() {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     const allNews = this.magazinservice.getLocalNewsItems();
     this.news = allNews.find(item => item.id === id);
    // this.magazinservice.getnews().subscribe(data => {
    //    this.news = data.find(n => n.id === id);
    // });
  }
  updateNews() {

    if (this.news) {
       this.magazinservice.updateLocalNewsItem(this.news);
      this.router.navigate(['admin/news']);
    }
  }
}
