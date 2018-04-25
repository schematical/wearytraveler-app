import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';

/**
 * Generated class for the PlayingCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'playing-card',
  templateUrl: 'playing-card.html'
})
export class PlayingCardComponent {
  @Input('card') card: any;


  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    console.log('Hello PlayingCardComponent Component');

  }


  ngAfterViewInit() {

  }
}
