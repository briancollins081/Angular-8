import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActive: boolean;
  userActivateSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userActivateSubscription = this.userService.activatedUserEmmiter.subscribe(activeState => {
      this.isActive = activeState;
    })
  }

  ngOnDestroy(){ 
    this.userActivateSubscription.unsubscribe();
  }
}
