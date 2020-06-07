import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User; 

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    return this.authService.getUserProfile(id)
    .subscribe(data => {
      console.log(data);
      this.currentUser = data});
  }
}
