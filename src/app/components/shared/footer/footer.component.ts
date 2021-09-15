import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   lat = 24.76034720684703;
   lng =46.69502634030517;


  constructor() { }

  ngOnInit(): void {
  }

}
