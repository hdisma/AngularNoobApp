import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number;
  rating: number = 4;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

}
