import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
    imports: [CommonModule]
})
export class CardComponent implements OnInit {

   @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
    showMore: boolean = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
  constructor() { }

  ngOnInit() {
  }

}
