import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _urlAPI = 'https://jsonplaceholder.typicode.com/posts/'
  //url="http://localhost:4200/"
  constructor(private http: HttpClient) { 

  }

  getPosts(){
    return this.http.get(this._urlAPI);
  }

  createPost(data: any){
    return this.http.post(this._urlAPI, data);
  }

  getCurrentData(id: any){
    return this.http.get(`${this._urlAPI}/${id}`)
  }

  editPost(id: any,data :any){
    return this.http.put(`${this._urlAPI}/${id}`,data)
  }
}
