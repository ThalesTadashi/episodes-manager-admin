import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  form = new FormGroup({
    name: new FormControl('teste', [Validators.required]), // Validators.pattern(/\s/)
    email: new FormControl('test@test.com', [Validators.required, Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,7}$')]),
    phone: new FormControl(''),
    sex: new FormControl('', [Validators.required]),
  });

  constructor(
    public router: Router
    // public createUser: CreateUserGQL
    ) {
  }
  getErrorMessage(s: string) {
    return s === 'required' ? 'Campo obrigatório' : 'Campo inválido';
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Preencha os campos obrigatórios!');
      return;
    }
    console.log('user cadastrado!');
  }



}
