import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // Method to check if current route is '/user-list'
  isOnUserListPage(): boolean {
    return this.router.url === '/user-list';
  }

  // Method to check if current route is '/user-input'
  isOnUserInputPage(): boolean {
    return this.router.url === '/user-input';
  }
}
