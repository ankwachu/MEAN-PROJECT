import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dog } from 'src/app/models/dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {
  id: any;
  dog = new Dog();
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDog();
  }

  getDog() {
    this.id = this.route.snapshot.params['id'];
    this.api.getOne(this.id)
      .subscribe(dog => {
        this.dog = dog;
        console.log(this.dog);
      })
  }
}
