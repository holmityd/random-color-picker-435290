import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  @Input('color') color: any;
  @Input('gradient') gradient: any;

  staticBackground: string;
  staticGradient: string;

  constructor() { }

  private updateColor(){
    this.staticBackground = this.color.color;
  }

  private updateGradient(){
    this.staticGradient = `linear-gradient(0deg, ${this.gradient.color} 0%, ${this.gradient.color2} 100%)`;
  }

  ngOnChanges(changes: SimpleChange) {
    if (changes['color'] !== undefined) {
      this.updateColor();
    }
    if (changes['gradient'] !== undefined) {
      this.updateGradient();
    }
  }

}