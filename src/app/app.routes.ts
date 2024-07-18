import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user-input',
    component: UserInputComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
];
