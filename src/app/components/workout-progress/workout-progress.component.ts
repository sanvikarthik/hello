import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class WorkoutProgressComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataset[] = [{ data: [], label: 'Total Minutes' }];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const users: User[] = this.userService.getUsers();
    this.barChartLabels = users.map((user) => user.name);
    this.barChartData[0].data = users.map((user) =>
      user.workouts.reduce((total, workout) => total + workout.minutes, 0)
    );
  }
}
