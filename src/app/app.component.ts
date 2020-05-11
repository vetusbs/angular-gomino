import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthenticationService } from './core/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Gomino Angular Client';
  constructor(private authService: AuthenticationService, private router: Router) {
    console.log(environment.apiUrl); // Logs false for default environment
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.authService.currentUserValue != null
}
}
