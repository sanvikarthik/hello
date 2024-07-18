import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User, Workout } from '../../services/user.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = 'Running';
  workoutMinutes: number = 0;

  constructor(private userService: UserService, private router: Router) {}

  addWorkout() {
    if (this.userName && this.workoutMinutes > 0) {
      const newUser: User = {
        id: Date.now(),
        name: this.userName,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }],
      };
      this.userService.addUser(newUser);
      this.router.navigate(['/user-list']); // Navigate back to home
    }
  }
}
