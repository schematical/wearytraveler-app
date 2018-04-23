import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCardsPage } from './list-cards';

@NgModule({
  declarations: [
    ListCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCardsPage),
  ],
})
export class ListCardsPageModule {}
