import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ListDecksPageModule } from '../pages/list-decks/list-decks.module';
import { EditDeckPageModule } from '../pages/edit-deck/edit-deck.module';
import { ListPlayersPageModule } from '../pages/list-players/list-players.module';
import { PlayCardsPageModule } from '../pages/play-cards/play-cards.module';
import { GameOverPageModule } from '../pages/game-over/game-over.module';
import { ListCardsPageModule } from '../pages/list-cards/list-cards.module';
import { EditCardPageModule } from '../pages/edit-card/edit-card.module';
import { AuthPageModule } from '../pages/auth/auth.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameStateManagerProvider } from '../providers/game-state-manager/game-state-manager';
import { CardsManagerProvider } from '../providers/cards-manager/cards-manager';
import { CommonModule } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthProvider } from '../providers/auth/auth';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    CommonModule,
    ListDecksPageModule,
    ListPlayersPageModule,
    PlayCardsPageModule,
    GameOverPageModule,
    ListCardsPageModule,
    AuthPageModule,
    EditCardPageModule,
    EditDeckPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
   /* ListDecksPage,
    ListPlayersPage,
    PlayCardsPage,
    GameOverPage,
    ListCardsPage,
    //AuthPage,
    EditCardPage,
    EditDeckPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameStateManagerProvider,
    CardsManagerProvider,
    SocialSharing,
    AuthProvider,
    NativeStorage
  ]
})
export class AppModule {}
