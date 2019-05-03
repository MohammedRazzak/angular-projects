import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListComponent } from './list/list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddTodoComponent },
  { path: 'item', component: ItemDetailsComponent },
];

@NgModule({
  declarations: [AddTodoComponent, ListComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListingModule { }
