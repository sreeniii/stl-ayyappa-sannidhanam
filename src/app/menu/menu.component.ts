import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  userAuthenticated = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentToken.subscribe(x => this.userAuthenticated = (x != null));
  }
}
