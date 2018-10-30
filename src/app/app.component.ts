import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fruits$;

  constructor(db: AngularFireDatabase) {
    this.fruits$ = firebase.database().ref('/fruits').once('value').then(snapshot => {
      return snapshot;
    });
    /*
        firebase.database().ref('/fruits').once('value').then(snapshot => {
          this.fruits = snapshot.val();
        });
    */
  }
}
