import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  indoorImages = [

    { text: 'Matsal', src: '../../../assets/images/gallery/matsal1.jpg'},
    { text: 'Matsal', src: '../../../assets/images/gallery/matsal2.jpg'},

    { text: 'Kök', src: '../../../assets/images/gallery/kok.jpg'},

    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum1.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum2.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum3.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum4.jpg'},

    { text: 'Tv-rum', src: '../../../assets/images/gallery/tv-rum1.jpg'},
    { text: 'Tv-rum', src: '../../../assets/images/gallery/tv-rum2.jpg'},

    { text: 'Vardagsrum', src: '../../../assets/images/gallery/vardagsrum1.jpg'},
    { text: 'Vardagsrum', src: '../../../assets/images/gallery/vardagsrum2.jpg'},
  ];

  outdoorImages = [

    { text: 'Hus', src: '../../../assets/images/gallery/hus1.jpg'},
    { text: 'Hus', src: '../../../assets/images/gallery/hus2.jpg'},
    { text: 'Hus', src: '../../../assets/images/gallery/hus3.jpg'},

    { text: 'Altan', src: '../../../assets/images/gallery/altan1.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan2.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan3.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan4.jpg'},

    { text: 'Pool', src: '../../../assets/images/gallery/pool1.jpg'},
    { text: 'Pool', src: '../../../assets/images/gallery/pool2.jpg'},

    { text: 'Terass', src: '../../../assets/images/gallery/terass1.jpg'},
    { text: 'Terass', src: '../../../assets/images/gallery/terass2.jpg'},
    { text: 'Terass', src: '../../../assets/images/gallery/terass3.jpg'},

   ];

  constructor() { }

  ngOnInit() {
  }



}
