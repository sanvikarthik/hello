import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = 'Cycling';
  workoutMinutes: number = 60;

  addWorkout() {
    console.log(
      `User: ${this.userName}, Workout: ${this.workoutType}, Minutes: ${this.workoutMinutes}`
    );
    // Add workout logic here
  }
}
