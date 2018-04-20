import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPlayersPage } from './list-players';

@NgModule({
  declarations: [
    ListPlayersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPlayersPage),
  ],
})
export class ListPlayersPageModule {}
