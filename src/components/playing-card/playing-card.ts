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

    /*this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');*/

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev){

    let newLeft = ev.center.x;
    let newTop = ev.center.y;

    this.domCtrl.write(() => {
      this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
      this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
    });

  }

}
