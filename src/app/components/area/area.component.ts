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

  mangoImages = [

    { text: 'Områdets entré', src: '../../../assets/images/area/blueMango/entre.jpg'},
    { text: 'Vaktkur och port', src: '../../../assets/images/area/blueMango/port.jpg'},

    { text: 'Området', src: '../../../assets/images/area/blueMango/hus1.jpg'},
    { text: 'Området', src: '../../../assets/images/area/blueMango/hus2.jpg'},
    { text: 'Området', src: '../../../assets/images/area/blueMango/hus3.jpg'},
    { text: 'Området', src: '../../../assets/images/area/blueMango/hus4.jpg'},
    { text: 'Området', src: '../../../assets/images/area/blueMango/hus5.jpg'},

    { text: 'Pool 1', src: '../../../assets/images/area/blueMango/pool1.jpg'},
    { text: 'Pool 2', src: '../../../assets/images/area/blueMango/pool2.jpg'},

    { text: 'Entré kvällstid', src: '../../../assets/images/area/blueMango/nattentre.jpg'},
    { text: 'Området på kvällen', src: '../../../assets/images/area/blueMango/natt-hus.jpg'},
    { text: 'Pool 1 på kvällen', src: '../../../assets/images/area/blueMango/natt-pool1-1.jpg'},
    { text: 'Pool 1 på kvällen', src: '../../../assets/images/area/blueMango/natt-pool1-2.jpg'},
    { text: 'Pool 2 på kvällen', src: '../../../assets/images/area/blueMango/natt-pool2.jpg'}
  ];

  phimImages = [

    { text: 'Mae Phim beach', src: '../../../assets/images/area/maePhim/strand1.jpg'},
    { text: 'Mae Phim beach', src: '../../../assets/images/area/maePhim/strand2.jpg'},
    { text: 'Mae Phim beach', src: '../../../assets/images/area/maePhim/strand3.jpg'},
    { text: 'Mae Phim beach', src: '../../../assets/images/area/maePhim/strand5.jpg'},
    { text: 'Ao Khai (Kungastranden)', src: '../../../assets/images/area/maePhim/strand4.jpg'},
    { text: 'Ao Khai (Kungastranden)', src: '../../../assets/images/area/maePhim/strand6.jpg'},

    { text: 'Strandnära restauranger', src: '../../../assets/images/area/maePhim/maePhim1.jpg'},
    { text: 'Mae Phim', src: '../../../assets/images/area/maePhim/maePhim2.jpg'},
    { text: 'Restauranger', src: '../../../assets/images/area/maePhim/maePhim3.jpg'},
    { text: 'Mae Phim', src: '../../../assets/images/area/maePhim/maePhim4.jpg'},

    { text: 'Torget i Mae Phim', src: '../../../assets/images/area/maePhim/torg1.jpg'},
    { text: 'Torget i Mae Phim', src: '../../../assets/images/area/maePhim/torg2.jpg'},

    { text: 'Skaldjurstallrik', src: '../../../assets/images/area/maePhim/mat1.jpg'},
    { text: 'Stekta räkor med vitlök', src: '../../../assets/images/area/maePhim/mat2.jpg'},
    { text: 'Pad Thai och papayasallad', src: '../../../assets/images/area/maePhim/mat3.jpg'},
    { text: 'Färsk frukt från lokala fruktståndet', src: '../../../assets/images/area/maePhim/mat4.jpg'}
  ];

}
