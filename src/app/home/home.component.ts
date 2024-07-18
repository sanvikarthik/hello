import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  recentUsers: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.recentUsers = this.userService.getUsers().slice(-5); // Get the last 5 users
  }

  navigateToAddUser() {
    this.router.navigate(['/user-input']);
  }

  getTotalWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, w) => total + w.minutes, 0);
  }
}
