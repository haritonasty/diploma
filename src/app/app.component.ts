import {Component, OnInit} from '@angular/core';
import {ImageService} from './services/image.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public image: string;
  public index: number;

  constructor(private imageService: ImageService, public auth: AuthService) {}

  ngOnInit() {
    this.index = this.imageService.getCurrentIndex();
    this.image = this.imageService.getCurrentImage();
    this.auth.anonymousLogin();
  }

  public changeImage(evaluate: boolean): void {
    this.imageService.setReaction(evaluate);
    this.index = this.imageService.getCurrentIndex();
    this.image = this.imageService.getCurrentImage();
  }
}
