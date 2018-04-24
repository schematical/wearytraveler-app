import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsManagerProvider } from '../../providers/cards-manager/cards-manager';
import { ListPlayersPage } from '../list-players/list-players'
import { ListCardsPage } from '../list-cards/list-cards'
import { EditDeckPage } from '../edit-deck/edit-deck'
import { AuthPage } from '../auth/auth';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ListDecksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-decks',
  templateUrl: 'list-decks.html',
})
export class ListDecksPage {
  decks = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private cardsManager: CardsManagerProvider, public auth: AuthProvider) {

    this.cardsManager.listDecks()
      .then(decks => {

        this.decks = decks;
      })
      .catch(error => {

        console.log(error);

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDecksPage');
  }
  playDeck(deck){
    this.navCtrl.push(ListPlayersPage, { deck: deck._id })
  }
  listCards(deck){
    this.navCtrl.push(ListCardsPage, { deck: deck._id })
  }
  editDeck(deck?){
    let nextData = { deck: deck || {} }

    this.auth.getUser()
      .then((user) => {
        if (!user) {
          return this.navCtrl.push(AuthPage, {nextPage: EditDeckPage, nextData: nextData})
        }
        this.navCtrl.push(EditDeckPage, nextData)
      })
      .catch((err) => {
        console.error(err);
      })
  }
}
