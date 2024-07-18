import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service'; // Adjust the path as needed
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-workout-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.scss'],
})
export class WorkoutProgressComponent implements AfterViewInit {
  users: User[] = [];
  selectedUser: User | null = null;
  chart: Chart | null = null;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngAfterViewInit() {
    // Initialize the chart with no data
    this.chart = new Chart('workoutChart', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Minutes',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.updateChart();
  }

  updateChart() {
    if (this.chart && this.selectedUser) {
      const workoutTypes = this.selectedUser.workouts.map(
        (workout) => workout.type
      );
      const workoutMinutes = this.selectedUser.workouts.map(
        (workout) => workout.minutes
      );

      this.chart.data.labels = workoutTypes;
      this.chart.data.datasets[0].data = workoutMinutes;
      this.chart.update();
    }
  }
}
