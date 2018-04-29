import {Injectable} from '@angular/core';
import {images} from './urls';
import {AuthService} from '../auth/auth.service';
import {Mark} from '../auth/Mark';

@Injectable()
export class ImageService {
  private readonly images: string[];
  private currentIndex: number;
  private readonly data: Mark[] = [];
  private keyLocalStorage = 'data';

  constructor(private authService: AuthService) {
    this.images = images;
    this.images.sort(() => Math.random() - 0.5);
    this.currentIndex = this.images.length;

    const text: string | null = localStorage.getItem(this.keyLocalStorage);
    if (text === null) { return; }
    this.data = JSON.parse(text);
    this.data.forEach(mark => {
      this.images.splice(this.images.indexOf(mark.url), 1);
      this.currentIndex--;
    });
  }

  public getCurrentIndex(): number {
    if (!this.currentIndex) {
      this.authService.updateUserData(this.data);
    }
    return this.currentIndex;
  }

  public getCurrentImage(): string {
    return this.images[--this.currentIndex];
  }

  public setReaction(evaluate: boolean): void {

    this.data.push({
      url: this.images[this.currentIndex],
      like: evaluate
    });
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(this.data));
  }
}
