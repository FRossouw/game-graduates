import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dvt-button-navigate',
  templateUrl: './button-navigate.component.html',
  styleUrls: ['./button-navigate.component.less']
})
export class ButtonNavigateComponent {

  @Input() link: string = 'main-menu';
  @Input() text: string = `Back`;

  constructor(private router: Router) { }
  
  navigate(): void {
    this.router.navigateByUrl(`/${this.link}`);
  }
}
