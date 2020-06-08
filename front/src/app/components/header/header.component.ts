import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser = new User();

  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute) { }

  logout() {
    this.authService.doLogout()
  }

  ngOnInit(): void {
    // this.getUser();

    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
  }
  getUser(id) {
    this.authService.getUserProfile(id)
      .subscribe(data => {
        console.log(data);
        this.currentUser = data
      });
  }
}
