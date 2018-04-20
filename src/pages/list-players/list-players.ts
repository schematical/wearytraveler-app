import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameStateManagerProvider } from '../../providers/game-state-manager/game-state-manager';
import { PlayCardsPage } from '../play-cards/play-cards';
/**
 * Generated class for the ListPlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-players',
  templateUrl: 'list-players.html',
})
export class ListPlayersPage {
  players:Array<any> = [];
  newPlayer = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameManager: GameStateManagerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPlayersPage');
  }
  addPlayer(){
    this.players.push({
      name: this.newPlayer
    });
    this.newPlayer = null;
  }
  removePlayer(player){
    this.players.forEach((_player,index)=>{
      if(_player.name == player.name){
        this.players.splice(index, 1)
      }
    })
  }
  startPlaying(){
    this.gameManager.setPlayers(this.players);
    this.navCtrl.push(PlayCardsPage, { deck: this.navParams.get('deck') })
  }

}
