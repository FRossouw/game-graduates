import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from './Store/reducers/game.Reducer';
import { ThemeToggleService } from './Utils/Theme/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-graduates';

  constructor(
    private themeService: ThemeToggleService
  ) { }

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }

}
