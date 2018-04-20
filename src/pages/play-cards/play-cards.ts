import { Component } from '@angular/core';
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
  xOffset:number = 0;
  selectedCard: any = null;
  cards:Array<any> = null;
  displayCard:any = null;
  screenHeight = 0;
  screenWidth = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cardsManager: CardsManagerProvider, platform: Platform) {
    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.screenWidth = platform.width();
      this.screenHeight = platform.height();
    });

    this.cardsManager.listCards(this.navParams.get('deck'))
      .then(cards => {

        this.cards = cards;
        this.cards.forEach((card, i)=>{
          card.bottom = 100;
          card.left = 100 * i;
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
  panCard(e, card) {

    //console.log('card', e);
    let newLeft = e.center.x;
    let newTop = e.center.y;

    if(!card.panStart){
      this.selectedCard = card;
      card.panStart = {
        left: newLeft,
        top: newTop,
        xDiff: 0,
        yDiff: 0
      }
      return;
    }
    card.panStart.xDiff = card.panStart.left - newLeft;
    card.panStart.yDiff = card.panStart.top - newTop;
    if(Math.abs(card.panStart.xDiff) > Math.abs(card.panStart.yDiff)){
      //Move all cards
      card.panStart.yDiff = 0;
    }else{
      card.panStart.xDiff = 0;
      //Draw this card
      if(Math.abs(card.panStart.yDiff) > 200){
          this.selectCard(card);
      }
    }

  }
  panEndCard(e, card) {

   /* let newLeft = e.center.x;
    let newTop = e.center.y;*/
    this.xOffset -= card.panStart.xDiff;
    card.panStart = null;
    this.selectedCard = null;



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
   console.log("TICK: ",  this.displayCard &&  this.displayCard.dispPos.top);
  }

}