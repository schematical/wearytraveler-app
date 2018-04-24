import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { ENV } from '@environment';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the CardsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsManagerProvider {

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
        return JSON.parse(data.data)
      })
  }
  createDeck(deck){
    this.http.setHeader('*', 'Authorization', 'Bearer ' + this.authProvider.getBearer());
    return this.http.post(ENV.API_ENDPOINT + '/decks', deck, {})
    .then((data)=>{
      return JSON.parse(data.data)
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

}
