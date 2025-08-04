import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { Article } from '../../core/models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  imports:[CommonModule]
})
export class ArticlesComponent implements OnInit {

  constructor(private magazinservice:MagazineService) { }
  articles: Article[] = [];
  ngOnInit() {
      this.getArtical()
  }
    getArtical(){
     this.magazinservice.getArticles().subscribe((res) => {
console.log(res)
      this.articles = res;
    });
  }
   trackById(index: number, item: Article) {
    return item.id;
  }
}
