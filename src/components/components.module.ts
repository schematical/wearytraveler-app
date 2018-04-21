import { NgModule } from '@angular/core';
import { PlayingCardComponent } from './playing-card/playing-card';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [PlayingCardComponent],
	imports: [CommonModule, BrowserModule],
	exports: [PlayingCardComponent]
})
export class ComponentsModule {}



