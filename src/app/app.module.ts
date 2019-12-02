import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
    AppComponent,
    TileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
