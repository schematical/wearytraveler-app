import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { ENV } from '@environment';

/*
  Generated class for the CardsManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsManagerProvider {

  constructor(public http: HTTP) {
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

}
