import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  indoorImages = [

    { text: 'Matsal', src: '../../../assets/images/house/matsal1.jpg'},
    { text: 'Matsal', src: '../../../assets/images/house/matsal2.jpg'},

    { text: 'Kök', src: '../../../assets/images/house/kok.jpg'},

    { text: 'Sovrum', src: '../../../assets/images/house/sovrum1.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/house/sovrum2.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/house/sovrum3.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/house/sovrum4.jpg'},

    { text: 'Tv-rum', src: '../../../assets/images/house/tv-rum1.jpg'},
    { text: 'Tv-rum', src: '../../../assets/images/house/tv-rum2.jpg'},

    { text: 'Vardagsrum', src: '../../../assets/images/house/vardagsrum1.jpg'},
    { text: 'Vardagsrum', src: '../../../assets/images/house/vardagsrum2.jpg'},
  ];

  outdoorImages = [

    { text: 'Hus', src: '../../../assets/images/house/hus1.jpg'},
    { text: 'Hus', src: '../../../assets/images/house/hus2.jpg'},
    { text: 'Hus', src: '../../../assets/images/house/hus3.jpg'},

    { text: 'Altan', src: '../../../assets/images/house/altan1.jpg'},
    { text: 'Altan', src: '../../../assets/images/house/altan2.jpg'},
    { text: 'Altan', src: '../../../assets/images/house/altan3.jpg'},
    { text: 'Altan', src: '../../../assets/images/house/altan4.jpg'},

    { text: 'Pool', src: '../../../assets/images/house/pool1.jpg'},
    { text: 'Pool', src: '../../../assets/images/house/pool2.jpg'},

    { text: 'Terass', src: '../../../assets/images/house/terass1.jpg'},
    { text: 'Terass', src: '../../../assets/images/house/terass2.jpg'},
    { text: 'Terass', src: '../../../assets/images/house/terass3.jpg'},

   ];

  constructor() { }

  ngOnInit() {
  }



}
