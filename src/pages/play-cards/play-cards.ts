import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsManagerProvider } from '../../providers/cards-manager/cards-manager';

import {Platform} from 'ionic-angular';
/**
 * Generated class for the PlayCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-cards',
  templateUrl: 'play-cards.html',
})
export class PlayCardsPage {
  CARD_WIDTH = 182;
  CARD_HEIGHT = 254;
  xOffset:number = 0;
  selectedCard: any = null;
  cards:Array<any> = null;
  displayCard:any = null;
  screenHeight = 0;
  screenWidth = 0;

  constructor(public element: ElementRef, public navCtrl: NavController, public navParams: NavParams, public cardsManager: CardsManagerProvider, platform: Platform) {
    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.screenWidth = platform.width();
      this.screenHeight = platform.height();

      let hammer = new window['Hammer'](this.element.nativeElement);
      hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    });

    this.cardsManager.listCards(this.navParams.get('deck'))
      .then(cards => {

        this.cards = cards;
        this.cards.forEach((card, i)=>{
          card.width = this.screenWidth * .8;
          card.height = card.width / this.CARD_WIDTH * this.CARD_HEIGHT;

          card.bottom = this.screenHeight * .1;
          card.left = card.width * .5 * i;
          card._parent = this;
        })
      })
      .catch(error => {

        console.log(error);

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayCardsPage');
    setInterval(()=>{
      this.tick();
    }, 50);
  }

  getCardLeft(card){
    let left =  card.left + this.xOffset - (this.selectedCard && this.selectedCard.panStart.xDiff || 0);

    return left;
  }
  getCardBottom(card){
    if(!card.panStart){
      return card.bottom;
    }
    let bottom = card.bottom + card.panStart.yDiff;
    //console.log(card.suit, card.number, ' - > ', bottom);
    return bottom;
  }
  panStartCard(e){
    let newLeft = e.center.x;
    let newTop = e.center.y;
    //if(!card) {
    let card = this.getCardByCoords(newLeft, newTop);
    //}
    if(!card){
      console.log("No card found");
      return;
    }

    this.selectedCard = card;
    console.log("Selected: " + this.selectedCard.number + ' ' + this.selectedCard.suit);
    card.panStart = {
      left: newLeft,
      top: newTop,
      xDiff: 0,
      yDiff: 0
    }
    return;

  }
  panCard(e) {
    let card = this.selectedCard;
    if(!card){
      console.log("PANNING - no `this.selectedCard`");
      return;
    }

    card.panStart.xDiff = e.deltaX * -1;//card.panStart.left - newLeft;
    card.panStart.yDiff = e.deltaY * -1;//card.panStart.top - newTop;

    console.log(card.panStart.left + ' / ' + card.panStart.top, ' --- x ' + Math.abs(card.panStart.xDiff) + ' > y ' + Math.abs(card.panStart.yDiff));
    if(Math.abs(card.panStart.xDiff) > Math.abs(card.panStart.yDiff)){
      //Move all cards
      card.panStart.yDiff = 0;
    }else{
      card.panStart.xDiff = 0;
      //Draw this card

      if(Math.abs(card.panStart.yDiff) > (this.screenHeight * .4)){
        console.log("Selected! ", Math.abs(card.panStart.yDiff) + ' > ' + (this.screenHeight * .4));
        this.selectCard(card);
      }
    }

  }
  panEndCard(e, card?) {

    if(!card) {
      let newLeft = e.center.x;
      let newTop = e.center.y;
      card = this.getCardByCoords(newLeft, newTop);
    }
    if(!card){
      return;
    }
    if(card.panStart) {
      this.xOffset -= card.panStart.xDiff;
      card.panStart = null;
    }
    this.selectedCard = null;

  }
  getCardByCoords(x,y){
    let cards = [];
    this.cards.forEach((card)=>{
      let baseX = this.getCardLeft(card);
      let baseY = this.getCardBottom(card);
      if(
        x > baseX &&
        x < baseX + card.width
       /* y > (this.screenHeight - baseY + card.height &&
        y < this.screenHeight - baseY */
      ){
        cards.push(card);
      }
    })
    return cards[cards.length - 1] || null;
  }
  selectCard(card){
    this.panEndCard(null, card);
    this.displayCard = card;
    this.displayCard.dispPos = {
      top:this.screenHeight,
      left: this.screenWidth * .1,
      phase:0,
      wait:0
    }
  }
  tick(){
    if(!this.displayCard){
      return;
    }
   if(this.displayCard.dispPos.phase == 0) {
     this.displayCard.bottom -= this.screenHeight / 15;
     this.displayCard.dispPos.top -= (this.screenHeight * .9) / 20;
     if(this.displayCard.dispPos.top < this.screenHeight * .1){
       this.displayCard.dispPos.phase = 1;
     }
   }else if(this.displayCard.dispPos.phase == 1){
     this.displayCard.dispPos.wait += 1;
     if(this.displayCard.dispPos.wait > 20 * 5){
       this.displayCard.dispPos.phase = 2;
     }

   }else if(this.displayCard.dispPos.phase == 2){
     this.displayCard.dispPos.top += (this.screenHeight * .9) / 20;
     if(this.displayCard.dispPos.top > this.screenHeight * 1.1){
       //this.displayCard.dispPos.phase = 3;
       this.displayCard.dispPos = null;
       this.displayCard = null;
     }
   }
   //console.log("TICK: ",  this.displayCard &&  this.displayCard.dispPos.top);
  }

}
