import { Component, OnInit } from '@angular/core';
import { ThemeToggleService } from 'src/app/Utils/Theme/theme-toggle.service';

@Component({
  selector: 'dvt-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private themeService: ThemeToggleService) { }

  ngOnInit(): void {
    this.themeService.toggle();
  }

}
