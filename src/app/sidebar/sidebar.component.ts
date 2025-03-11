import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  sidebarShow = true;
  subMenuStates: { [key: string]: boolean } = {
    create: false,
    todoList: false,
  };

  toggleSidebar() {
    this.sidebarShow = !this.sidebarShow;

    if (!this.sidebarShow) {
      // timeout is set for smooth transition when closing sidebar
      setTimeout(() => {
        Object.keys(this.subMenuStates).forEach((key) => {
          this.subMenuStates[key] = false;
        });
      });
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
}
