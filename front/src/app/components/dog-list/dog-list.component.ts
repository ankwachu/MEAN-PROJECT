import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

dogs: Dog[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(){
    return this.api.getDogs()
    .subscribe(data => {
      console.log(data);
      this.dogs = data});
  }

}
