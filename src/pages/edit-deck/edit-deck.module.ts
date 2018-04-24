import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDeckPage } from './edit-deck';

@NgModule({
  declarations: [
    EditDeckPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDeckPage),
  ],
})
export class EditDeckPageModule {}
