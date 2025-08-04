import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
