import { Component, ElementRef, Input, EventEmitter,  Output  } from '@angular/core';

/**
 * Generated class for the PlayingCardTouchListenerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'playing-card-touch-listener',
  templateUrl: 'playing-card-touch-listener.html'
})
export class PlayingCardTouchListenerComponent {

  @Output() pan = new EventEmitter<boolean>();
  @Output() panEnd = new EventEmitter<boolean>();
  @Output() panStart = new EventEmitter<boolean>();
  @Output() dblclick = new EventEmitter<boolean>();
  constructor(public element: ElementRef) {

  }
  ngAfterViewInit() {
    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({direction: window['Hammer'].DIRECTION_ALL});

    hammer.on('pan', (e) => {
      this.pan.emit(e);
    });

    hammer.on('panstart', (e) => {
      console.log('panstart');
      this.panStart.emit(e);
    });

    hammer.on('panend', (e) => {
      console.log('panend');
      this.panEnd.emit(e);
    });
    hammer.on('pancancel', (e) => {
      console.log('pancancel');
      this.panEnd.emit(e);
    });
  }
  onDblclick($event){
    this.dblclick.emit($event);
  }

}
