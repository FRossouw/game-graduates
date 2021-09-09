import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dvt-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {

  @Input() list: string[] = [];
  @Output() selectedItem = new EventEmitter<string>();

  changeSelectedItem(selection: string): void {
    this.selectedItem.emit(selection);
  }


}
