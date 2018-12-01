import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mik-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit {

  @Input()
  vm: TileVM;

  constructor() { }

  ngOnInit() {
  }

}

export class TileVM {
  url: string;
  title?: string;
  image?: string;
}