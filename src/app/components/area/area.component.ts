import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  areaImages = [

    { text: 'Området', src: '../../../assets/images/gallery/omradet1.jpg'},
    { text: 'Området', src: '../../../assets/images/gallery/omradet2.jpg'},

    { text: 'Restaurang', src: '../../../assets/images/gallery/restaurang.jpg'},

    { text: 'Strand', src: '../../../assets/images/gallery/strand1.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand2.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand3.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand4.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand5.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand6.jpg'},
  ];

}
