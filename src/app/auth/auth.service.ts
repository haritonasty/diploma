import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
}


@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {

    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
      });
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);


    const data: User = {uid: user.uid};
    console.log(data);
    return userRef.set(data, {merge: true});

  }

}
