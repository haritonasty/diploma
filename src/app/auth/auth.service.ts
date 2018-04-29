import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import User from './User';

@Injectable()
export class AuthService {

  // userObservable: Observable<User>;
  user: User;
  userRef: AngularFirestoreDocument<any>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.user = new User();
    // this.userObservable = this.afAuth.authState
    //   .switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return Observable.of(null);
    //     }
    //   });
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


  public updateUserData(evaluates: number[]) {
    this.user.evulates = evaluates;
    // this.userObservable
    this.userRef.set({eval: evaluates}, {merge: true});
  }

}
