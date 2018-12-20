import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventpgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventpg',
  templateUrl: 'eventpg.html',
})
export class EventpgPage {
   img: string;
   title: string;
   date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.get('img');
    this.title = navParams.get('title');
    this.date = new Date(navParams.get('date'));
  }
}
