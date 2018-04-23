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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameStateManagerProvider } from '../providers/game-state-manager/game-state-manager';
import { CardsManagerProvider } from '../providers/cards-manager/cards-manager';
import { CommonModule } from '@angular/common';

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
    GameOverPage
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
    GameOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameStateManagerProvider,
    CardsManagerProvider
  ]
})
export class AppModule {}
