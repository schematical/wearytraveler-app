import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CardsManagerProvider } from '../../providers/cards-manager/cards-manager';

/**
 * Generated class for the EditCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-card',
  templateUrl: 'edit-card.html',
})
export class EditCardPage {
  card:any = null;

  _all:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cardsManagerProvider: CardsManagerProvider, public alertCtrl: AlertController) {
    this.card = this.navParams.get('card')
  }
  changeSuit(suit){
    console.log("Suit:", suit);
    if(!this._all){
      let alert = this.alertCtrl.create({
        title: 'Coming soon',
        subTitle: 'This feature is coming soon',
        buttons: ['OK']
      });
      alert.present();
      this._all = true;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCardPage');
  }
  save(){
    console.log("Save", this.card);

    this.cardsManagerProvider.saveCard(this.card)
      .then(()=>{
        this.navCtrl.pop();
      })
      .catch((err)=>{
        console.error(err);
      })
  }

}
