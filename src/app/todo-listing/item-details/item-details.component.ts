import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  postId: string;
  public responseData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']) {
          this.postId = params['id'];
          this.getPost();
        }
      }
    );
  }

  getPost() {
    this._todoService.getItem(this.postId)
      .subscribe(
        (data) => {
          this.responseData = data;
        },
        error => {
          alert("ERROR");
        });
  }

}
