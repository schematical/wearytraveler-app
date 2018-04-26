import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ListDecksPage } from '../list-decks/list-decks';
import { EditDeckPage } from '../edit-deck/edit-deck';
import { AuthPage } from '../auth/auth'
import { AuthProvider } from '../../providers/auth/auth'
/**
 * Generated class for the GameOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-over',
  templateUrl: 'game-over.html',
})
export class GameOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameOverPage');
  }
  share(){
    this.socialSharing.share("We just played an awesome game of Weary Traveler", 'Life is fun and games!', null, 'http://shiporgetoffthepot.com')
  }
  donate(){
    console.log("Donate");
  }
  playAgain(){
    this.navCtrl.push(ListDecksPage, { })
  }
  makeADeck(){
    let nextData = { deck: {} }

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
