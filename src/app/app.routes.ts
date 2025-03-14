import { Routes } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CreateComponent } from './views/create/create.component';
import { DocumentComponent } from './views/create/document/document.component';
import { FolderComponent } from './views/create/folder/folder.component';
import { ProjectComponent } from './views/create/project/project.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { IndexComponent } from './views/index/index.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CodingComponent } from './views/todo-list/coding/coding.component';
import { GardeningComponent } from './views/todo-list/gardening/gardening.component';
import { PrivateComponent } from './views/todo-list/private/private.component';
import { SchoolComponent } from './views/todo-list/school/school.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { WorkComponent } from './views/todo-list/work/work.component';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    children: [
      {
        path: 'folder',
        component: FolderComponent,
      },
      {
        path: 'document',
        component: DocumentComponent,
      },
      {
        path: 'project',
        component: ProjectComponent,
      },
    ],
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
    children: [
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'private',
        component: PrivateComponent,
      },
      {
        path: 'coding',
        component: CodingComponent,
      },
      {
        path: 'gardening',
        component: GardeningComponent,
      },
      {
        path: 'school',
        component: SchoolComponent,
      },
    ],
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
