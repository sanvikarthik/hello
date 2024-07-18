import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * HeaderComponent is responsible for rendering the header section of the application,
 * including navigation links and a logo.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Constructor initializes the component with Router.
   * @param router The Angular Router for navigation.
   */
  constructor(private router: Router) {}

  /**
   * Checks if the current route is '/user-list'.
   * @returns True if the current route is '/user-list', false otherwise.
   */
  isOnUserListPage(): boolean {
    return this.router.url === '/user-list';
  }

  /**
   * Checks if the current route is '/user-input'.
   * @returns True if the current route is '/user-input', false otherwise.
   */
  isOnUserInputPage(): boolean {
    return this.router.url === '/user-input';
  }
}
