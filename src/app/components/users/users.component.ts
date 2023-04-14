import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CreateUserInput } from 'src/generated/graphql';
import { CreateUserGQL } from 'src/generated/graphql';
import Swal from "sweetalert2";

declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  form = new FormGroup({
    name: new FormControl('Name', [Validators.required]),
    nickName: new FormControl('Nick', [Validators.required]),
    email: new FormControl('test@test.com', [Validators.required, Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,7}$')]),
    phone: new FormControl('',[Validators.required]),
    profile: new FormControl('user'),
    sex: new FormControl('', [Validators.required]),
  });

  constructor(
    public router: Router,
    public createUserGQL: CreateUserGQL
  ) {
  }
  getErrorMessage(s: string) {
    return s === 'required' ? 'Campo obrigatório' : 'Campo inválido';
  }
  ngOnInit(): void {
  }

  showMessage(t: string, m: string, type: any = 'warning') {
    Swal.fire({
        title: t,
        html: m,
        icon: type,
        confirmButtonColor: '#032E58',
    });
}

showModal(idModal: string) {
  $('#' + idModal).modal('show');
}
  onSubmit() {
    if (!this.form.valid) {
      console.log('Preencha os campos obrigatórios!');
      return;
    }

    console.log('user cadastrado!');
    console.log(this.form.value);

    this.showModal('userModal')

    const data: CreateUserInput = {
      email: this.form.value.email || '',
      phone: this.form.value.phone || '',
      name: this.form.value.name || '',
      profile: this.form.value.profile || '',
    }
    this.createUserGQL.mutate({ data: data }).subscribe((result) => {
      this.showMessage('Sucesso', 'Usuário criado', 'success');
            
    });
  }




}
