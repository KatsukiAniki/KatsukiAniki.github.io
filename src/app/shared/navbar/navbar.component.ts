import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveTab();
      }
    });
  }

  updateActiveTab() {
    const currentRoute = this.router.url;
    // You can customize this logic to match your routes
    if (currentRoute === '/events' || currentRoute === '/teams') {
      // Apply the selected-tab class
      this.router.navigate([currentRoute]);
    }
  }

  isActive(route: string) {
    return this.router.url === route;
  }
}
