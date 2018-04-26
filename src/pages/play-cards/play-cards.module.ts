import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayCardsPage } from './play-cards';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PlayCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayCardsPage),
    ComponentsModule
  ],
})
export class PlayCardsPageModule {}
