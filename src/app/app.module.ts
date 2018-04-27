import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CoreModule
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
