import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontpageService {

  constructor(private http: HttpClient) {

  }

  getPerson(id: number) {
    return this.http.get(environment.url + '/people/' + id);
  }
}
