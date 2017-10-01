import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the KeycloakProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var Keycloak: any;

@Injectable()
export class KeycloakProvider {
  static auth: any = {};
  constructor(public http: Http) {

  }
  static init(): Promise<any> {
    // Create a new Keycloak Client Instance

    const keycloakAuth: any = Keycloak({
      "realm": "qipai",
      "url": "http://127.0.0.1:8080/auth",
      "ssl-required": "external",
      "resource": "qipaipm",
      "clientId": "qipaipm",
      "credentials": {
        "secret": "bfa66136-0503-4564-958e-a1665a37f4c5"
      }
    });

    KeycloakProvider.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required', checkLoginIframe: false})
        .success(() => {
          console.log(keycloakAuth);
          resolve();
        })
        .error(() => {
          console.log("失败");
          reject();
        });
    });
  }

  logout() {
    console.log('*** LOGOUT');
    KeycloakProvider.auth.authz.logout();
    KeycloakProvider.auth.loggedIn = false;
    KeycloakProvider.auth.authz = null;

    //window.location.href = KeycloakService.auth.logoutUrl;
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (KeycloakProvider.auth.authz.token) {
        KeycloakProvider.auth.authz
          .updateToken(5)
          .success(() => {
            resolve(<string>KeycloakProvider.auth.authz.token);
          })
          .error(() => {
            reject('Failed to refresh token');
          });
      } else {
        reject('Not loggen in');
      }
    });
  }
}
