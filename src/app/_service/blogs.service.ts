import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }



  getAllCategory() {
    //only four for showing in the all category section. 
    return this.http.get(environment.url + '/justcategories?_limit=4');
  }
  getCategory(name: string) {
    return this.http.get(environment.url + '/justcategories?categoryname=' + name);
  }
  getFeaturedCategory() {
    return this.http.get(environment.url + '/justcategories?featured_eq=true');
  }


  getBlog(id: number) {
    console.log("called")
    return this.http.get(environment.url + '/blogs/' + id);
  }
}
