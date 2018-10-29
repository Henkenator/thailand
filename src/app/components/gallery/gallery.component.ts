import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  items = [
    { text: 'Altan', src: '../../../assets/images/gallery/altan1.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan2.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan3.jpg'},
    { text: 'Altan', src: '../../../assets/images/gallery/altan4.jpg'},

    { text: 'Hus', src: '../../../assets/images/gallery/hus1.jpg'},
    { text: 'Hus', src: '../../../assets/images/gallery/hus2.jpg'},
    { text: 'Hus', src: '../../../assets/images/gallery/hus3.jpg'},

    { text: 'Kök', src: '../../../assets/images/gallery/kok.jpg'},

    { text: 'Matsal', src: '../../../assets/images/gallery/matsal1.jpg'},
    { text: 'Matsal', src: '../../../assets/images/gallery/matsal2.jpg'},

    { text: 'Området', src: '../../../assets/images/gallery/omradet1.jpg'},
    { text: 'Området', src: '../../../assets/images/gallery/omradet2.jpg'},

    { text: 'Pool', src: '../../../assets/images/gallery/pool1.jpg'},
    { text: 'Pool', src: '../../../assets/images/gallery/pool2.jpg'},

    { text: 'Restaurang', src: '../../../assets/images/gallery/restaurang.jpg'},

    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum1.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum2.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum3.jpg'},
    { text: 'Sovrum', src: '../../../assets/images/gallery/sovrum4.jpg'},

    { text: 'Strand', src: '../../../assets/images/gallery/strand1.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand2.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand3.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand4.jpg'},
    { text: 'Strand', src: '../../../assets/images/gallery/strand5.jpg'},

    { text: 'Terass', src: '../../../assets/images/gallery/terass1.jpg'},
    { text: 'Terass', src: '../../../assets/images/gallery/terass2.jpg'},
    { text: 'Terass', src: '../../../assets/images/gallery/terass3.jpg'},

    { text: 'Tv-rum', src: '../../../assets/images/gallery/tv-rum1.jpg'},
    { text: 'Tv-rum', src: '../../../assets/images/gallery/tv-rum2.jpg'},

    { text: 'Vardagsrum', src: '../../../assets/images/gallery/vardagsrum1.jpg'},
    { text: 'Vardagsrum', src: '../../../assets/images/gallery/vardagsrum2.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
