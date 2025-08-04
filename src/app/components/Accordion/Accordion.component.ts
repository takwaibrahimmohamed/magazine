import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Accordion',
  templateUrl: './Accordion.component.html',
  styleUrls: ['./Accordion.component.css'],
  imports:[CommonModule]
})
export class AccordionComponent implements OnInit {
accordionItems = [
  {
    title: 'Nubian Traditions',
    content: 'Discover the vibrant traditions of Nubian culture including their colorful houses, language, and community lifestyle.'
  },
  {
    title: 'Traditional Foods',
    content: 'Taste authentic dishes like Feseekh, Aseeda, and spicy stews that reflect the unique flavors of Aswan.'
  },
  {
    title: 'Famous Landmarks',
    content: 'Explore iconic sites such as Philae Temple, the High Dam, Abu Simbel, and the Unfinished Obelisk.'
  },
  {
    title: 'Natural Beauty',
    content: 'Enjoy the scenic beauty of the Nile, botanical gardens, islands, and golden desert landscapes.'
  },
  {
    title: 'Handicrafts & Markets',
    content: 'Shop handmade crafts, spices, and traditional clothes in Aswan’s lively local markets like Souq Aswan.'
  },
  {
    title: 'Festivals & Events',
    content: 'Experience cultural festivals with music, dance, and folklore that celebrate the heritage of the region.'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
