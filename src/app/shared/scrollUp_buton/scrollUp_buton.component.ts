import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollUp_buton',
  templateUrl: './scrollUp_buton.component.html',
  styleUrls: ['./scrollUp_buton.component.css'],
  imports:[CommonModule]
})
export class ScrollUp_butonComponent implements OnInit {
  showButton = false;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = window.scrollY > 350;
  }
    scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
