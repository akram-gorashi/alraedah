import { Component, OnInit } from '@angular/core';
import { Scroll } from '../../shared/helpers/ScrollTo';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private sroll: Scroll) { }

  ngOnInit(): void {
  }

  scrollTo(id: string) {
    this.sroll.scrollTo(id)
  }
}
