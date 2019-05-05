import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private Http: HttpClient) { }

  getTodoList() {
    return this.Http.get(this._url);

  }
}
