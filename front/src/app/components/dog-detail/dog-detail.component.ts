import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/models/dog.model';
import { Location } from '@angular/common';
import * as M from 'materialize-css';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {
  id: any;
  dog = new Dog();
  submitted = false;
  message: string;

  constructor(private api: ApiService, private route: ActivatedRoute, private location: Location, private router: Router) { }

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

  onDelete(dog: Dog) {
    if (confirm('Are you sure to delete this puppy ?')) {
      this.api.deleteDog(dog._id)
        .subscribe(res => {
          this.dog = res;
          // M.toast({ html: 'Puppy deleted !', classes: 'red accent-2' })
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  update() {
    this.submitted = true;
    this.api.update(this.dog)
      .subscribe(res => {
        this.dog = res;
        M.toast({html: 'Puppy updated !', classes: 'green lighten-1'})
      });
    this.router.navigateByUrl('home')
  }
}
