import { NgModule } from '@angular/core';
import { PlayingCardComponent } from './playing-card/playing-card';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PlayingCardTouchListenerComponent } from './playing-card-touch-listener/playing-card-touch-listener';
@NgModule({
	declarations: [PlayingCardComponent,
    PlayingCardTouchListenerComponent],
	imports: [CommonModule, BrowserModule],
	exports: [PlayingCardComponent,
    PlayingCardTouchListenerComponent]
})
export class ComponentsModule {}



