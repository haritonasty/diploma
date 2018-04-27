import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private image: string;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.image = this.imageService.popImage();
  }

  public changeImage(evulate: string) {
    this.image = this.imageService.popImage();
  }
}
