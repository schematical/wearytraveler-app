import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GameStateManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameStateManagerProvider {
  static players:Array<any> = [];
  static currPlayerIndex:number = 0;

  constructor(public http: HTTP) {
    console.log('Hello GameStateManagerProvider Provider');
  }
  setPlayers(players){
    GameStateManagerProvider.players = players;
  }
  nextPlayer(){
    let player = GameStateManagerProvider.players[GameStateManagerProvider.currPlayerIndex];
    GameStateManagerProvider.currPlayerIndex += 1;
    if(GameStateManagerProvider.currPlayerIndex > GameStateManagerProvider.players.length){
      GameStateManagerProvider.currPlayerIndex = 0;
    }
    return player;
  }

}
