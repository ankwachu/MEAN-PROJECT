import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000/api/dogs/';
  items = [];

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.url)
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.url, dog, httpOptions)
  }

  deleteDog(id: string) {
    return this.http.delete<Dog>(this.url + id);
  }

  adopt(dog: Dog) {
    this.items.push(dog);
    this.items.reverse();
    console.log("list of adopted puppies: ", this.items);
  }

  getAdopted() {
    return this.items;
  }
}

