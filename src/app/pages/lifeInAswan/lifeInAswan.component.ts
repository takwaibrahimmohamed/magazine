import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../../core/services/magazine.service';
import { Districts } from '../../core/models/districts.model';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "../../components/Accordion/Accordion.component";
import { ScrollUp_butonComponent } from "../../shared/scrollUp_buton/scrollUp_buton.component";

@Component({
  selector: 'app-lifeInAswan',
  templateUrl: './lifeInAswan.component.html',
  styleUrls: ['./lifeInAswan.component.css'],
   imports: [CommonModule, AccordionComponent, ScrollUp_butonComponent]

})
export class LifeInAswanComponent implements OnInit {
  district: Districts[] = [];
  constructor(private magazinservice:MagazineService ) { }

  ngOnInit() {
    this.getdistricts()
  }
 getdistricts(){
    this.magazinservice.getdistricts().subscribe((res: Districts[])=>{
      this.district = res
console.log(this.district)
    })
  }
}
