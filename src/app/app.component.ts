import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myColor = { color: this.getRandomColor() };
  myGradient = { color: this.getRandomColor(), color2: this.getRandomColor() };

  constructor(){
    setInterval(()=>{
      this.myColor = {color: this.getRandomColor()};
      this.myGradient = { color: this.getRandomColor(), color2: this.getRandomColor() };
    },2000);
  }

  private getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
