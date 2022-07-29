import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credito-page',
  templateUrl: './credito-page.component.html',
  styles: [
  ]
})
export class CreditoPageComponent implements OnInit {
  sidenavExpandido: boolean = true;
  iconoBtnExpandir: string = 'chevron_left';

  constructor() { }

  ngOnInit(): void {
  }

  togglePageSidenav(): void {
    this.sidenavExpandido = !this.sidenavExpandido;
    this.iconoBtnExpandir = (this.sidenavExpandido) ? 'chevron_left' : 'chevron_right';
    /* drawer.toggle(); */
  }
}
