import { Component, ViewChild } from '@angular/core';  

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})

export class SideNavigationComponent {

  @ViewChild('sidenav') sideNavElement;

  toggle() {
    this.sideNavElement.toggle();
  }

}
