import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})

export class HeaderToolbarComponent {

  @Input() title: string;
  @Input() icons: any[];
  @Input() toogleIcon: string;
  @Input() displayToggle: boolean;

}