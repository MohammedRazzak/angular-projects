import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  registrationForm = this.fb.group({
    username: ['Ahmed kamal'],
    password: [''],
    confirmpassword: ['']
  });
  // registrationForm = new FormGroup({
  //   username: new FormControl('razak'),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl('')
  // });

  loadData() {
    this.registrationForm.setValue({
      username: 'mohamed Razak',
      password: '12345',
      confirmpassword: '12345',
    });
  }

}
