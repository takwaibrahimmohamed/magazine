import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports:[CommonModule,RouterLink]
})
export class SidebarComponent implements OnInit {
 collapsed = false;

  constructor() { }
 

  ngOnInit() {
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
