import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  items: any;

  ngOnInit(): void {
    this.items = this.apiService.getAdopted();
  }

}
