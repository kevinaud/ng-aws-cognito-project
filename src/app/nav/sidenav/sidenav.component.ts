import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavLocation } from './nav-location';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavOpen: boolean;

  @Input() navLocations: NavLocation[] = [];

  constructor(private router: Router) { }

  navigate(location) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.sidenavOpen = false;
  }

  toggle() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  open() {
    this.sidenavOpen = true;
  }

  close(sidenav) {
    sidenav.close();
  }

  closed(event) {
    this.sidenavOpen = false;
  }

}
