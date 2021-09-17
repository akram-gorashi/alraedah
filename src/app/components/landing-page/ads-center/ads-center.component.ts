import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ads-center',
  templateUrl: './ads-center.component.html',
  styleUrls: ['./ads-center.component.scss'],
})
export class AdsCenterComponent implements OnInit {
  adsCenterOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: true,
   autoplay: true,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   dots: false,
   navSpeed: 700,
   navText: ['', ''],
   responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
   responsiveRefreshRate: 50
}

  constructor() {}

  ngOnInit(): void {}
}
