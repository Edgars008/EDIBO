import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ez';

  MAXRANGE = 300;
  imageCount = 0;
  isVisible = true;
  imageSources = [];
  // imageSources = [
  // //  'https://picsum.photos/id/237/200/300',
  // //  'https://picsum.photos/id/238/200/300',
  // //  'https://picsum.photos/id/239/200/300',
  // //  'https://picsum.photos/id/239/200/300',
  // ]

  toggle(){
    this.isVisible= !this.isVisible;
  }

  private generateId(){
    return Math.round(Math.random()* this.MAXRANGE)+1;

  }

  increaseImageCount(){
    const id = this.generateId();
    this.imageSources.push(
      `https://picsum.photos/id/${id}/200/300`
    );
    
  }
}
