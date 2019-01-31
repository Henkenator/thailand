import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css']
})
export class ImageHolderComponent implements OnInit {

  @Input() images: Array<any>;
  selectedImage: ThaiImage;

  private currentSlide = 0;

  constructor() { }

  ngOnInit() {
    this.selectedImage = this.images[0];
  }

  next() {
    // this.selectedImage = this.images
  }

  prev() {

  }

}

export interface ThaiImage {
  text: string;
  src: string;
}
