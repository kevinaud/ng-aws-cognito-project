import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserService } from 'ng2-aws-cognito';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() openSidenav: EventEmitter<any> = new EventEmitter();
  authenticated: Observable<boolean>;

 // constructor(private user: UserService) { }

  ngOnInit() { }

  menuIconClick() {
    this.openSidenav.emit(null);
  }

  logout() {
  	console.log('logout');
    //this.userService.logout();
  }

}
