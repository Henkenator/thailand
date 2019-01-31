import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  indoorImages = [

    { text: 'Vardagsrum', src: '../../../assets/images/house/vardagsrum1.jpg'},
    { text: 'Vardagsrum', src: '../../../assets/images/house/vardagsrum2.jpg'},
    { text: 'Vardagsrum ut mot altan', src: '../../../assets/images/house/vardagsrum3.jpg'},

    { text: 'Bord med plats för 8', src: '../../../assets/images/house/matsal1.jpg'},
    { text: 'Bord med plats för 8', src: '../../../assets/images/house/matsal2.jpg'},

    { text: 'Kök', src: '../../../assets/images/house/kok.jpg'},

    { text: 'Sovrum 1', src: '../../../assets/images/house/sovrum1.jpg'},
    { text: 'Sovrum 2', src: '../../../assets/images/house/sovrum2.jpg'},
    { text: 'Sovrum 2', src: '../../../assets/images/house/sovrum3.jpg'},

    { text: 'Tv-rum', src: '../../../assets/images/house/tv-rum1.jpg'},
    { text: 'Fåtöljer/gästsängar', src: '../../../assets/images/house/tv-rum2.jpg'},

  ];

  outdoorImages = [

    { text: 'Huset', src: '../../../assets/images/house/hus1.jpg'},
    { text: 'Huset sett från poolen', src: '../../../assets/images/house/hus2.jpg'},

    { text: 'Balkong', src: '../../../assets/images/house/balkong1.jpg'},
    { text: 'Balkong', src: '../../../assets/images/house/balkong2.jpg'},
    { text: 'Utsikt från balkong', src: '../../../assets/images/house/balkong3.jpg'},


    { text: 'Altan', src: '../../../assets/images/house/altan1.jpg'},
    { text: 'Altan', src: '../../../assets/images/house/altan2.jpg'},
    { text: '2 st cyklar', src: '../../../assets/images/house/cyklar.jpg'},

   ];

  constructor() { }

  ngOnInit() {
  }



}
