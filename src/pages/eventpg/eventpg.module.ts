import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventpgPage } from './eventpg';

@NgModule({
  declarations: [
    EventpgPage,
  ],
  imports: [
    IonicPageModule.forChild(EventpgPage),
  ],
})
export class EventpgPageModule {}
