import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KeycloakProvider } from "../../providers/keycloak/keycloak";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private keycloak: KeycloakProvider) {

  }

  ionViewDidLoad() {
    KeycloakProvider.init()
      .then(() => {

      })
      .catch(() => {

      });
  }
}
