import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ListDecksPage } from '../list-decks/list-decks'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing) {
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

}
