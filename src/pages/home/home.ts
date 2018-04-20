import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListDecksPage } from '../list-decks/list-decks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listDecksPage = ListDecksPage;
  constructor(public navCtrl: NavController) {

  }
  nav(page){
    this.navCtrl.push(page);
  }

}
