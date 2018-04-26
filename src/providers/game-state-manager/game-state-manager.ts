//import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
/*
  Generated class for the GameStateManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameStateManagerProvider {
  static players:Array<any> = [];
  static currPlayerIndex:number = 0;

  constructor(public nativeStorage: NativeStorage, ) {
    console.log('Hello GameStateManagerProvider Provider');

  }
  getPlayers(){
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem('players')
        .then(
          data => {
            GameStateManagerProvider.players = data || [];
            return resolve(GameStateManagerProvider.players)
          },
          reject
        );
    });
  }
  setPlayers(players){
    GameStateManagerProvider.players = players;
    return new Promise((resolve, reject) => {
      return this.nativeStorage.setItem('players', GameStateManagerProvider.players)
        .then(
          resolve,
          reject
        );
    });


  }
  nextPlayer(){
    let player = GameStateManagerProvider.players[GameStateManagerProvider.currPlayerIndex];
    GameStateManagerProvider.currPlayerIndex += 1;
    if(GameStateManagerProvider.currPlayerIndex > GameStateManagerProvider.players.length){
      GameStateManagerProvider.currPlayerIndex = 0;
    }
    this.nativeStorage.setItem('currPlayerIndex',  GameStateManagerProvider.currPlayerIndex)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    return player;
  }

}
