import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayCardsPage } from './play-cards';

@NgModule({
  declarations: [
    PlayCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayCardsPage),
  ],
})
export class PlayCardsPageModule {}
