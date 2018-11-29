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

    { text: 'Pool', src: '../../../assets/images/area/pool2.jpg'},
    { text: 'Pool', src: '../../../assets/images/area/pool1.jpg'},

    { text: 'Området', src: '../../../assets/images/area/omradet1.jpg'},
    { text: 'Området', src: '../../../assets/images/area/omradet2.jpg'},

    { text: 'Restaurang', src: '../../../assets/images/area/restaurang.jpg'},

    { text: 'Strand', src: '../../../assets/images/area/strand1.jpg'},
    { text: 'Strand', src: '../../../assets/images/area/strand2.jpg'},
    { text: 'Strand', src: '../../../assets/images/area/strand3.jpg'},
    { text: 'Strand', src: '../../../assets/images/area/strand4.jpg'},
    { text: 'Strand', src: '../../../assets/images/area/strand5.jpg'},
    { text: 'Strand', src: '../../../assets/images/area/strand6.jpg'},
  ];

}
