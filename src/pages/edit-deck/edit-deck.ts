import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CardsManagerProvider } from '../../providers/cards-manager/cards-manager'
import { ListCardsPage } from '../list-cards/list-cards';
/**
 * Generated class for the EditDeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-deck',
  templateUrl: 'edit-deck.html',
})
export class EditDeckPage {
  deck = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cardsManagerProvider: CardsManagerProvider, public alertCtrl: AlertController) {
    this.deck = this.navParams.get('deck');
    this.deck.public = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDeckPage');
  }
  togglePublic(){
    let alert = this.alertCtrl.create({
      title: 'Coming soon',
      subTitle: 'This feature is coming soon. Right now all decks are public.',
      buttons: ['OK']
    });
    alert.present();
    this.deck.public = true;
  }
  save(){

    return this.cardsManagerProvider.saveDeck(this.deck)
      .then((deck)=>{
        this.deck = deck;
        this.navCtrl.push(ListCardsPage, { deck: this.deck._id })
      })
      .catch((err)=>{
        console.error(err);
      })

  }

}
