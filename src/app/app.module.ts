import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    TileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
