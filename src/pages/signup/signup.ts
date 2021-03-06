import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tapped(event,id) {
  	this.navCtrl.push (SignupPage, {
  		id:id
  	});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

}
