import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ColorComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
