import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
/* -------------------------------------------------------------------------- */
 /*                             parteners carousol                             */
 /* -------------------------------------------------------------------------- */

   /* Partners Carousel Opts */
   partnersCarouselOpts: OwlOptions = {
      margin: 0,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      // nav: true,
      navSpeed: 700,
      // navText: ['&#8249', '&#8250;'],
      responsive: {
         0: {
            items: 2,
         },
         400: {
            items: 2,
         },
         500: {
            items: 3,
         },
         700: {
            items: 3,
         },
         900: {
            items: 5,
         },
      },
      responsiveRefreshRate: 50,
   };
   

  constructor() { }

  ngOnInit(): void {
  }

}
