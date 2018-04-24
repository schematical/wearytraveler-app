import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsManagerProvider } from '../../providers/cards-manager/cards-manager';
import { AuthPage } from '../auth/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { EditCardPage } from '../edit-card/edit-card';
/**
 * Generated class for the ListCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-cards',
  templateUrl: 'list-cards.html',
})
export class ListCardsPage {
  cards = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public cardsManager: CardsManagerProvider, public auth: AuthProvider) {

    this.cardsManager.listCards(this.navParams.get('deck'))
      .then(cards => {

        this.cards = cards;
        /*this.cards.forEach((card, i)=>{

        })*/
      })
      .catch(error => {

        console.log(error);

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCardsPage');
  }
  edit(card){
    let nextData = { card: card}


    this.auth.getUser()
      .then((user) => {
        if (!user) {
          return this.navCtrl.push(AuthPage, {nextPage: EditCardPage, nextData: nextData})
        }
        return this.navCtrl.push(EditCardPage, nextData);
      })
      .catch((err) => {
        console.error(err);
      })


  }


}
