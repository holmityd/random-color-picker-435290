import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DotComponent } from './dot/dot.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DotComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
