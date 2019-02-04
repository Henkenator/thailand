import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() images: Array<ThaiImage>;

  private currentSlide = 0;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.currentSlide < this.images.length - 1) {
      this.currentSlide++;
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

}

export interface ThaiImage {
  text: string;
  src: string;
}
