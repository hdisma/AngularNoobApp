import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number = 0;
  @Input() rating: number = 0;
  @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.starWidth = this.rating * 65 / 5;
  }

  onClick(): void {
    this.starRatingClicked.emit(`Rating Clicked! | value -> ${this.rating}`);
  }

}
