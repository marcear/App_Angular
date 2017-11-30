import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})

export class HeaderToolbarComponent {

  @Input() title: string;
  @Input() icons: any[];  
  @Input() displayToggle: boolean;
  @Output() onToggle = new EventEmitter<void>();
  @Input() showFilterMenu: boolean;
  
  arrowLeftIcon = "keyboard_arrow_left";
  arrowRightIcon = "keyboard_arrow_right";
  toogleIcon = this.arrowLeftIcon;

  toggle():void {
    if (this.toogleIcon == this.arrowLeftIcon) {
      this.toogleIcon = this.arrowRightIcon;
    } else {
      this.toogleIcon = this.arrowLeftIcon;
    }
    this.onToggle.emit();
  }

}