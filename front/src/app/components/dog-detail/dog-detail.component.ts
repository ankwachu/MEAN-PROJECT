import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/models/dog.model';
import { Location } from '@angular/common';
import * as M from 'materialize-css';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  dog: Dog;
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  imageUrl: any;
  name: any;

  constructor(public fb: FormBuilder, private api: ApiService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.updateDog();
    let id = this.route.snapshot.params['id'];
    this.getDog(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(14), Validators.pattern("^[0-9]*$")]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.reg)]]
    });
    this.onChanges();
  }

  getDog(id) {
    this.api.getOne(id)
      .subscribe(data => {
        this.editForm.setValue({
          name: data['name'],
          age: data['age'],
          imageUrl: data['imageUrl'],
        });
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        console.log(data);
      })
  }

  get myForm() {
    return this.editForm.controls;
  }

  updateDog() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]*$")]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(14), Validators.pattern("^[0-9]*$")]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.reg)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      let id = this.route.snapshot.paramMap.get('id');
      this.api.update(id, this.editForm.value)
        .subscribe(res => {
          console.log(res)
          M.toast({ html: 'Puppy updated !', classes: 'green lighten-1' })
          this.router.navigateByUrl('/home');
        }, (error) => {
          console.log(error)
        });
    }
  }

  onDelete() {
    if (confirm('Are you sure to delete this puppy ?')) {
      let id = this.route.snapshot.paramMap.get('id');
      this.api.deleteDog(id)
        .subscribe(res => {
          console.log(res);
          M.toast({ html: 'Puppy deleted !', classes: 'red accent-2' })
          this.router.navigateByUrl('home')
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  onChanges(): void {
    this.editForm.get('imageUrl').valueChanges.subscribe(result => {
      this.imageUrl = result;
    });
    this.editForm.get('name').valueChanges.subscribe(result => {
      this.name = result;
    });
  }
}
