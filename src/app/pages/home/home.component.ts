import { Component, OnInit } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";
import { CommonModule } from '@angular/common';
import { MagazineService } from '../../core/services/magazine.service';
import { Attraction } from '../../core/models/attraction.model';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from "../../shared/card/card.component";
import { Article } from '../../core/models/article.model';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { ScrollUp_butonComponent } from "../../shared/scrollUp_buton/scrollUp_buton.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [SliderComponent, CommonModule, HttpClientModule, CardComponent, ArticlesComponent, ScrollUp_butonComponent]
})
export class HomeComponent implements OnInit {
  attractions: Attraction[] = [];
content: string = "Aswan is more idyllic than other cities in Egypt—located in southern Egypt, it’s a great place to explore that country’s epic history far away from the chaos of Cairo. Take a traditional wooden felucca around Elephantine Island and explore the ruins of the Temple of Khnum. (Editor's note: Our list was compiled before political unrest prompted many countries to issue travel warnings for Egypt. If you're currently planning a trip to Egypt, please consider the risks and monitor your government's travel alerts.)";
showMore: boolean = false;
  filteredCategory: Attraction[] = [];
  selectedType: string = 'All';

  types: string[] = ['All', 'Attractions', 'Culture', 'Tourism'];
  constructor(private magazinservice:MagazineService) { }

  ngOnInit() {
    this.getTopAtrractive();
  
  }
  getTopAtrractive(){
    this.magazinservice.getAttractions().subscribe((res: Attraction[])=>{
      this.attractions = res
       this.filteredCategory = res;

    })
  }

toggleReadMore() {
  this.showMore = !this.showMore;
}
  filterByType(type: string): void {
    this.selectedType = type
    if (this.selectedType === 'All') {
      this.filteredCategory = this.attractions;
    } else {
      this.filteredCategory = this.attractions.filter(item => item.type === this.selectedType);
    }
  }

}
