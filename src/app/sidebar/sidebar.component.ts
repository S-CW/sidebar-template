import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('slideDown', [
      state('close', style({ height: 0, opacity: 0 })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('close <=> open', animate('300ms ease-in-out')),
    ]),
    trigger('slideSidebar', [
      state('close', style({ width: '60px', padding: '5px' })),
      state('open', style({ width: '*' })),
      transition('close <=> open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  private _router = inject(Router);

  sidebarShow = true;
  subMenuStates: { [key: string]: boolean } = {
    create: false,
    todoList: false,
  };

  constructor() {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const segments = e.urlAfterRedirects.split('/');
        if (segments.length > 2) {
          return;
        } else {
          this.closeAllSubMenus();
        }
      }
    });
  }

  toggleSidebar() {
    this.sidebarShow = !this.sidebarShow;

    if (!this.sidebarShow) {
      this.closeAllSubMenus();
    }
  }

  toggleSubMenu(state: string) {
    Object.keys(this.subMenuStates).forEach((key) => {
      if (key !== state) {
        this.subMenuStates[key] = false;
      } else {
        this.subMenuStates[state] = !this.subMenuStates[state];
      }
    });

    // open side bar when sub menu is clicked
    if (!this.sidebarShow) {
      this.sidebarShow = true;
    }
  }

  closeAllSubMenus() {
    // timeout is set for smooth transition when closing sidebar
    setTimeout(() => {
      Object.keys(this.subMenuStates).forEach((key) => {
        this.subMenuStates[key] = false;
      });
    });
  }
}
