import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service'; // Adjust the path as needed
import { Chart, registerables } from 'chart.js';

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

  @ViewChild('workoutChart', { static: false })
  workoutChart!: ElementRef<HTMLCanvasElement>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.workoutChart && this.workoutChart.nativeElement) {
        this.initializeChart();
      } else {
        console.error('workoutChart element or nativeElement is undefined.');
      }
    }, 0);
  }

  initializeChart() {
    Chart.register(...registerables);
    const ctx = this.workoutChart.nativeElement.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Workout Minutes',
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
            title: {
              display: true,
              text: 'Workout Minutes',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Workout Types',
            },
          },
        },
      },
    });

    // Update chart initially with selected user
    this.updateChart();
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
