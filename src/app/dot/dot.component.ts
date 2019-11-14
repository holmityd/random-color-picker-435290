import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css']
})
export class DotComponent implements OnInit {

  @Input('color') color: any;
  @Input('gradient') gradient: any;

  staticBackground: string;
  staticGradient: string;

  constructor() { }

  private updateColor(){
    this.staticBackground = this.color.color;
  }

  private updateGradient(){
    this.staticGradient = `linear-gradient(45deg, ${this.gradient.color} 0%, ${this.gradient.color2} 100%)`;
  }

  ngOnInit() {
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