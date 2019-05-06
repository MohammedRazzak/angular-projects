import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {



  public responseData: any;

  constructor(private _todoService: TodoService, private router: Router) { }

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

  viewItem(id) {
    if (id) {
      this.router.navigate(['/todo-list/item/' + id]);
    }
  }
}
