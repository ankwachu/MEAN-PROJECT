import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser : User;

  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute, private router: Router ) { }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('log-in')
  }

  ngOnInit(): void {
    // this.getUser();

    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
  }
  // getUser() {
  //   let id = this.actRoute.snapshot.paramMap.get('id');
  //   return this.authService.getUserProfile(id)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.currentUser = data
  //     });
  // }
}
