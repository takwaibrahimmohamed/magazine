import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attraction } from '../models/attraction.model';
import { Article } from '../models/article.model';
import { Districts } from '../models/districts.model';
import { NewsItem } from '../models/newsItem';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
private newsItems: NewsItem[] = [];
 constructor(private http: HttpClient) {}
  getAttractions(): Observable<Attraction[]>{
    return this.http.get<Attraction[]>('server/data/top-attractions.json');
  }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('server/data/articales.json');
  }
  getdistricts(): Observable<Districts[]> {
    return this.http.get<Districts[]>('server/data/districts.json');
  }
  getnews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>('server/data/LatestNews.json');
  }
setNewsItems(items: NewsItem[]) {
  this.newsItems = items;
}

getLocalNewsItems(): NewsItem[] {
  return this.newsItems;
}
updateLocalNewsItem(updatedItem: NewsItem) {
  const index = this.newsItems.findIndex(item => item.id === updatedItem.id);
  if (index > -1) {
    this.newsItems[index] = updatedItem;
  }
}
addNewsItem(item: NewsItem) {
  const items = this.getLocalNewsItems();
  items.push(item);
  this.setNewsItems(items);
}
  
}
