import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import 'rxjs/add/operator/switchMap';
import {User} from './User';
import {Mark} from './Mark';

@Injectable()
export class AuthService {

  user: User;
  userRef: AngularFirestoreDocument<any>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.user = new User();
  }

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.user.uid = user.uid;
        this.userRef = this.afs.doc<User>(`users/${user.uid}`);
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
      });
  }


  public updateUserData(marks: Mark[]) {
    this.user.marks = marks;
    this.userRef.set({marks}, {merge: true});
  }

}
