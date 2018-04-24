import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  nextPage = null;
  nextData = null;
  username = null;
  password = null;
  _register = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.nextPage = this.navParams.get('nextPage');
    this.nextData = this.navParams.get('nextData');
    if(!this.nextPage){
      throw new Error("What page is next?");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }
  toggleRegister(state){
    this._register = state;
  }
  register(){
    this.auth.register(this.username, this.password)
      .then((data)=>{
        console.log('register-success', data);
        return this.next();
      })
      .catch((err)=>{
        console.error(err);
      })
  }
  login(){
    this.auth.login(this.username, this.password)
      .then((data)=>{
        console.log('login-success', data);
        return this.next();
      })
      .catch((err)=>{
        console.error(err);
      })
  }
  next(){
    this.navCtrl.pop()
      .then(()=>{
        return this.navCtrl.push(this.nextPage, this.nextData);
      })
      .catch((e)=>{
        console.error(e);
      })

  }

}
