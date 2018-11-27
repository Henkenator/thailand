import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef, Input,
  OnInit,
  QueryList,
  TemplateRef, ViewChild,
  ViewChildren
} from '@angular/core';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective {

  constructor( public tpl: TemplateRef<any> ) {
  }

}


@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  template: `
    <section class="carousel-wrapper" [ngStyle]="carouselWrapperStyle">
      <ul class="carousel-inner" #carousel>
        <li *ngFor="let item of items;" class="carousel-item">
          <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
        </li>
      </ul>
    </section>
    <div *ngIf="showControls" style="background-color: #4a4a4a; padding-bottom: 1em" class="control-container">
      <button (click)="prev()" class="btn btn-default" style="margin-right: 10px;">Föreg</button>
      <span style="color: white; padding-top: 0.5em;">Bild {{currentSlide + 1}} av {{items.length}}</span>
      <button (click)="next()" class="btn btn-default" style="margin-left: 10px">Nästa</button>
    </div>
  `,
  styles: [`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 6000px;
    }

    .carousel-wrapper {
      overflow: hidden;
    }

    .carousel-inner {
      display: flex;
    }
    .control-container {
      display: flex;
      justify-content: center;
    }
    button {
      background-color: var(--orange);
      border: none;
      color: white;
      padding: 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      text-transform: uppercase;
      /*margin: 4px 2px;*/
    }

  `]
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;

  @Input() timing = '250ms ease-in';
  @Input() showControls = true;

  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  next() {
    if ( this.currentSlide + 1 === this.items.length ) {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if ( this.currentSlide === 0 ) {
      return;
    }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor( private builder: AnimationBuilder ) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });

  }

}
