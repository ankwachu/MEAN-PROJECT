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
  // pictures = [];
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      age: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern(this.reg)]]
    });

    // this.pictures = this.getPictures();
    // this.myForm.controls.pictures.patchValue(this.pictures[0].id);

    this.myForm.valueChanges
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });

      $(document).ready(function(){
        $('select').formSelect();
      });

  }

  // getPictures() {
  //   return [
  //     { name: 'imageUrl one', imageUrl: 'https://mochishiba.skj.jp/wp-content/uploads/2019/08/thum_ume.png'},
  //     { name: 'imageUrl two', imageUrl: '/assets/pictures/thum_anko.png' },
  //     { name: 'imageUrl three', imageUrl: '/assets/pictures/thum_monaka.png' },
  //     { name: 'imageUrl four', imageUrl: '/assets/pictures/thum_okaka.png' },
  //     { name: 'imageUrl five', imageUrl: '/assets/pictures/thum_sakura.png' },
  //     { name: 'imageUrl six', imageUrl: '/assets/pictures/thum_ume.png' }
  //   ];
  // }

  onAddPuppy() {
    this.dataService.addDog(this.myForm.value)
    .subscribe(res => {
      console.log('Puppy created!')
      this.router.navigateByUrl('home')
      M.toast({html: 'Puppy created !', classes: 'green lighten-1'})
      this.myForm.reset();
    })
  }

  get name() {
    return this.myForm.get('name');
  }
  get age() {
    return this.myForm.get('age');
  }
  get imageUrl() {
    return this.myForm.get('imageUrl');
  }

  goBack(): void {
    this.router.navigateByUrl('home')
  }
}