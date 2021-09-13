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
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
