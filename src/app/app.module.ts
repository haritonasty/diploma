import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './auth/core.module';

import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CoreModule
  ],
  providers: [ ImageService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
