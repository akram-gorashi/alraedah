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
   autoplayTimeout: 3000,
   autoplayHoverPause: true,
   dots: false,
   nav: true,
   navSpeed: 700,
   navText: ['', ''],
   responsive: {
      900: {
         items: 1
      }
   },
   responsiveRefreshRate: 50
}

  constructor() {}

  ngOnInit(): void {}
}
