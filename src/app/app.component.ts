import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private image: string;

  constructor(private imageService: ImageService, public auth: AuthService) {}

  ngOnInit() {
    this.image = this.imageService.popImage();
    this.auth.anonymousLogin();
  }

  public changeImage(evulate: string) {
    this.image = this.imageService.popImage();
  }
}
