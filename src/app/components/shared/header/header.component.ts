import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /* UI */
  hasScrolledBanner = false;
  isNavbarCollapsed = false;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Listens to window scroll events
   *
   * @param {*} event
   * @memberof HeaderComponent
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset > 100) this.hasScrolledBanner = true;
    else this.hasScrolledBanner = false;
  }
}
