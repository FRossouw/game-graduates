import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-gameboy',
  templateUrl: './gameboy.component.html',
  styleUrls: ['./gameboy.component.scss']
})
export class GameboyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonStateChange(button: string): void {}

}
