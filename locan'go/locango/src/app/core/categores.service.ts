import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoresService {

  constructor(
    private http: Http
  ) { }


  gelAllCategories(): Observable<any> {


    return this.http.get('http://localhost:3000/api/categories')
      .map((res) => {
        if(res){
          return res.json();
        }

      });
  }
  getListCommerce(id):Observable<any> {

    return this.http.get('http://localhost:3000/api/categorie/'+id)
      .map((res) => {
        if (res) {
          return res.json();
        }

      });
  }

  getDetaitItem(id):Observable<any> {

  return this.http.get('http://localhost:3000/api/detailt/'+id)
      .map((res) => {
        if (res) {
          return res.json();
        }

  });
}

}
