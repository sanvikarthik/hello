import { Routes } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { WorkoutProgressComponent } from './components/workout-progress/workout-progress.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-input', pathMatch: 'full' },
  { path: 'user-input', component: UserInputComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'workout-progress', component: WorkoutProgressComponent },
  { path: '**', redirectTo: '/user-input' }, // Redirect to default route for unknown paths
];
