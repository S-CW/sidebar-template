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
  dropdownStates: { [key: string]: boolean } = {
    create: false,
    todoList: false,
  };

  toggleSidebar() {
    this.sidebarShow = !this.sidebarShow;
  }

  toggleDropdown(state: string) {
    Object.keys(this.dropdownStates).forEach((key) => {
      if (key !== state) {
        this.dropdownStates[key] = false;
      } else {
        this.dropdownStates[state] = !this.dropdownStates[state];
      }
    });
  }
}
