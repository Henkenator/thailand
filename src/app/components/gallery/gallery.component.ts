import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items = [
    { title: 'Slide 1', src: '../../../assets/images/boat.jpg'},
    { title: 'Slide 2', src: '../../../assets/images/boat.jpg'},
    { title: 'Slide 3', src: '../../../assets/images/boat.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
