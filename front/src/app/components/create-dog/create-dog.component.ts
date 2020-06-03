import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as M from 'materialize-css';
declare var $: any;

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit {

  myForm: FormGroup
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(14), Validators.pattern("^[0-9]*$")]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.reg)]]
    });

    this.myForm.valueChanges
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });

      $(document).ready(function(){
        $('select').formSelect();
      });

  }

  onAddPuppy() {
    this.dataService.addDog(this.myForm.value)
    .subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('home')
      M.toast({html: 'Puppy created !', classes: 'green lighten-1'})
      this.myForm.reset();
    })
  }

  get f(){
    return this.myForm.controls;
  }

  goBack(): void {
    this.router.navigateByUrl('home')
  }
}