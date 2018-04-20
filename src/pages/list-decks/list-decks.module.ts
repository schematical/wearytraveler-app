import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDecksPage } from './list-decks';

@NgModule({
  declarations: [
    ListDecksPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDecksPage),
  ],
})
export class ListDecksPageModule {}
