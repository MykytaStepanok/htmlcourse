import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
currentYear: number;
  constructor() { }

  ngOnInit(): void {
    this.currentYear = ((new Date()).getFullYear());
  }

}

