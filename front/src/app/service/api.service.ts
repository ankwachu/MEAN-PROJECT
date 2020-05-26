import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000/api/dogs';

  constructor(private http: HttpClient) { }

getDogs(): Observable<Dog[]> {
  return this.http.get<Dog[]>(this.url)
}

}
