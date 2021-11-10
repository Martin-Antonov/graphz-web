import {Component, ElementRef, OnInit} from '@angular/core';
import * as Phaser from 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;
import {MainScene} from './src/MainScene';

@Component({
  selector: 'app-graphz',
  templateUrl: './graphz.component.html',
  styleUrls: ['./graphz.component.scss']
})
export class GraphzComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const config: GameConfig = {
      type: Phaser.WEBGL,
      title: 'Game Theory Explorer',
      backgroundColor: '#fff',
      scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-div',
        width: '100%',
        height: '100%'
      },
      roundPixels: false,
      antialias: true,
    };

    const game = new Phaser.Game(config);
    game.scene.add('main', MainScene, true);
  }

}
