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
import { ListDecksPage } from '../pages/list-decks/list-decks';
import { ListPlayersPage } from '../pages/list-players/list-players';
import { PlayCardsPage } from '../pages/play-cards/play-cards';
import { GameOverPage } from '../pages/game-over/game-over';
import { ListCardsPage } from '../pages/list-cards/list-cards';
import { EditCardPage } from '../pages/edit-card/edit-card';
import { AuthPage } from '../pages/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameStateManagerProvider } from '../providers/game-state-manager/game-state-manager';
import { CardsManagerProvider } from '../providers/cards-manager/cards-manager';
import { CommonModule } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListDecksPage,
    ListPlayersPage,
    PlayCardsPage,
    GameOverPage,
    ListCardsPage,
    AuthPage,
    EditCardPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListDecksPage,
    ListPlayersPage,
    PlayCardsPage,
    GameOverPage,
    ListCardsPage,
    AuthPage,
    EditCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameStateManagerProvider,
    CardsManagerProvider,
    SocialSharing
  ]
})
export class AppModule {}
