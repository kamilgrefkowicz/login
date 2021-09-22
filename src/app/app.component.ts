import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;
  isProcessing = false;

  attemptLogin(event: any): void {
    console.log(`Verifying data for user ${event.email}`);
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.isLoggedIn = true;
    }, 1000);
  }
}
