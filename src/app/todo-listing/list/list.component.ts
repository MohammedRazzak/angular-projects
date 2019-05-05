import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public responseData: any;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodoList()
      .subscribe(
        (data) => {
          this.responseData = data;
        },
        error => {
          alert("ERROR");
        });
  }
}
