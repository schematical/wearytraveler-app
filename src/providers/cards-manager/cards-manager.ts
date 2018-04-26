import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { ENV } from '@environment';
import { AuthProvider } from '../auth/auth';
import * as _ from 'underscore';

/*
  Generated class for the CardsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsManagerProvider {
  public SUITS = {
    H:'H',
    D:'D',
    C:'C',
    S:'S'
  }
  constructor(public http: HTTP, public authProvider: AuthProvider) {
    console.log('Hello CardsManagerProvider Provider');
  }
  listDecks(){

    return this.http.get(ENV.API_ENDPOINT + '/decks', {}, {})
      .then((data)=>{
        return JSON.parse(data.data)
      })
  }
  getDeck(deckId){

    return this.http.get(ENV.API_ENDPOINT + '/decks/' + deckId, {}, {})
      .then((data)=>{
      return JSON.parse(data.data)
    })
  }
  listCards(deckId){

    return this.http.get(ENV.API_ENDPOINT + '/decks/' + deckId + '/cards', {}, {})
      .then((data)=>{
        let cards = JSON.parse(data.data);

        return cards;
      })
  }
  saveDeck(deck){
    return this.authProvider.getBearer()
      .then((bearer)=>{
        if(!bearer){
          throw new Error("Must be logged in to call this method");
        }
        let url = ENV.API_ENDPOINT + '/decks';
        if(deck._id){
          url = ENV.API_ENDPOINT + '/decks/' + deck._id
        }
        return this.http.post(url, deck, { 'Authorization': 'Bearer ' + bearer})
        .then((data)=>{
          return JSON.parse(data.data)
        })
      })
  }
  saveCard(card){
    return this.authProvider.getBearer()
        .then((bearer)=>{
          if(!bearer){
            throw new Error("Must be logged in to call this method");
          }
          return this.http.post(ENV.API_ENDPOINT + '/decks/' + card.deck + '/cards', card,{ 'Authorization': 'Bearer ' + bearer})
      })
      .then((data)=>{
        return JSON.parse(data.data)
      })
  }
  parseCards(startCards){
    let endCards = [];
    startCards.forEach((card)=>{
      if(card.suit !== "A"){
        endCards.push(card);
        return;
      }
      Object.keys(this.SUITS).forEach((suit)=>{
        let newCard = _.clone(card);
        newCard.suit = suit;
        endCards.push(newCard)
      });

    })
    console.log("New Card Length: ", endCards.length);
    return endCards;
  }

}
