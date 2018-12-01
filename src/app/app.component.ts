import { Component } from '@angular/core';
import { TileVM } from './tile/tile.component';

@Component({
  selector: 'mik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-tab-sample';

  pages: TileVM[] = [
    {
      title: 'Weather Toronto',
      url: 'https://www.google.ca/search?q=weather+toronto',
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Purple/v4/31/70/8f/31708f5a-1615-b54d-7663-8b7e801ef639/source/256x256bb.jpg'
    }, {
      title: 'Weather Wasaga',
      url: 'https://www.google.ca/search?q=weather+wasaga',
      image: 'https://tile03-cdn.maptoolkit.net/terrain/12/1137/1481.png'
    }, {
      title: 'github/miktemk',
      url: 'https://github.com/miktemk',
      image: 'https://avatars1.githubusercontent.com/u/3788283?s=400&v=4'
    }, {
      title: 'SCRUM!!!',
      url: 'https://plus.google.com/hangouts/_/amginetech.com/dean?hceid=ZGVhbkBoZWxsb2dieWUuY29t.7scbgo03fl1tf56e3lbhjpkso8&authuser=0',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Hangouts_Icon.png'
    }, {
      title: 'Gmail (0)',
      url: 'https://mail.google.com/mail/u/',
      image: 'https://cdn.iconscout.com/icon/free/png-256/gmail-11-226399.png'
    }, {
      title: 'Gmail (1)',
      url: 'https://mail.google.com/mail/u/1/#inbox',
      image: 'https://i0.wp.com/www.mstoic.com/wp-content/uploads/2013/04/gmail1.png'
      // image: 'http://www.myiconfinder.com/uploads/iconsets/256-256-a3791f116b14f8817b24a1009f419b3c.png'
    }, {
      title: 'Jenkins',
      url: 'http://master.jenkins.hellogbye.internal:8080',
      image: 'https://avatars0.githubusercontent.com/u/21040190?s=460&v=4'
    }

    
  ];
}


