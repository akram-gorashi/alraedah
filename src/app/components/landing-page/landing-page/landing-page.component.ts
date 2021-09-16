import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '../../shared/helpers/ScrollTo';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  activeSection: string = 'hero';
  hasScrolledBanner: boolean = false;

  constructor(private sroll: Scroll) { }

  ngOnInit(): void {
  }

  // Window scroll events
  @HostListener("window:scroll", ["$event"])
  onScroll(event: any) {
    if (window.pageYOffset > 700)
      this.hasScrolledBanner = true;
    else this.hasScrolledBanner = false;
  }

  scrollTo(id: string) {
    this.activeSection = id;
    this.sroll.scrollTo(id)
  }
}
