import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  mostrar() {
    this.http.get('http://localhost/BibliotecaYavirac/server/autor/leer')
    .subscribe(r => {
      console.log(r);
    }, error => {
      console.log(error);
    });
  }
}
