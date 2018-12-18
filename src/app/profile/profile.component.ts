import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private subscription: Subscription;
  user: User;
  userId: number;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id') && params['id'] !== '') {
          this.userId = params['id'];
          this.userService.getById(this.userId).subscribe(user => {
            this.user = user;
          });
      }
    });
  }

}
