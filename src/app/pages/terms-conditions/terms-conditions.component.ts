import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  standalone: false,
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.css',
})
export class TermsConditionsComponent {
  constructor(private router: Router) {
    // Scroll to top when component initializes
    this.scrollToTop();

    // Set a 15-minute (900,000 ms) auto-redirect timer with reminder
    const reminderTime = 14 * 60 * 1000; // 14 minutes
    const redirectTime = 15 * 60 * 1000; // 15 minutes

    setTimeout(() => {
      alert(
        'You have been on this page for 14 minutes. You will be redirected to the home page in 1 minute.'
      );
    }, reminderTime);

    setTimeout(() => {
      this.router.navigate(['']);
    }, redirectTime);
  }

  routeToHome() {
    this.router.navigate(['/']).then(() => {
      // Scroll to top after navigation
      this.scrollToTop();
    });
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
