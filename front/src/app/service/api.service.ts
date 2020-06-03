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

  private url = 'http://localhost:3000/api/dogs';
  items = [];

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    let url = `${this.url}`;
    return this.http.get<Dog[]>(url)
  }

  addDog(dog: Dog): Observable<Dog> {
    let url = `${this.url}`;
    return this.http.post<Dog>(url, dog, httpOptions)
  }

  deleteDog(id: string) {
    let url = `${this.url}/${id}`;
    return this.http.delete<Dog>(url);
  }

  getOne(id: string): Observable<Dog> {
    let url = `${this.url}/${id}`;
    return this.http.get<Dog>(url);
  }

  update (id, data): Observable<any> {
    let url = `${this.url}/${id}`;
    return this.http.put<Dog>(url, data, httpOptions);
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

