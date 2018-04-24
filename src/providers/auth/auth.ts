import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { ENV } from '@environment';
import * as _ from 'underscore';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HTTP, public nativeStorage: NativeStorage) {
    console.log('Hello AuthProvider Provider');
  }
  register(username, password){
    return this.http.post(ENV.API_ENDPOINT + '/register', {
      username,
      password
    }, {})
      .then((data)=>{
        let body = JSON.parse(data.data);
        this.setBearer(body.jwt);
        this.setUser(body.user);
        return body;
      })
  }
  login(username, password){
    return this.http.post(ENV.API_ENDPOINT + '/login', {
      username,
      password
    }, {})
    .then((data)=>{
      let body = JSON.parse(data.data);
      this.setBearer(body.jwt);
      this.setUser(body.user);
      return body;
    })
  }
  getAuthHeaders(){
    let token = this.getBearer();
    let headers = '';
    if(token) {
      headers += 'Authorization:Bearer ' + token;
    }

    return headers;
  }
  setBearer(bearer:string){
    return new Promise((resolve, reject)=> {
      this.nativeStorage.setItem('bearer', {bearer: bearer})
        .then(
          () => {
            return resolve();
          },
          reject
        );
    });
  }
  getBearer() {
    return this.nativeStorage.keys()
      .then((keys)=>{

        return new Promise((resolve, reject)=> {
          if (_.indexOf(keys, 'bearer') === -1) {
            return resolve(null);
          }
          this.nativeStorage.getItem('bearer')
            .then(
              data => {
                console.log(data)
                if (!data || !data.bearer) {
                  return null;
                }
                return resolve(data.bearer);
              },
              reject
            );
        });
    })
  }
  setUser(user){
    return new Promise((resolve, reject)=> {
      this.nativeStorage.setItem('user', user)
        .then(
          () => {
            return resolve();
          },
          reject
        );
    });
  }
  getUser(){
   /* return new Promise((resolve, reject)=> {
      this.nativeStorage.keys();resolve, reject)

    })*/
    return this.nativeStorage.keys()
    .then((keys)=>{

        return new Promise((resolve, reject)=> {
          if(_.indexOf(keys, 'user') === -1){
            return resolve(null);
          }
          this.nativeStorage.getItem('user')
            .then(
              data => {
                console.log(data)
                if(!data) {
                  return null;
                }
                return resolve(data);
              },
              reject
            );
        })
    })
  }

}
