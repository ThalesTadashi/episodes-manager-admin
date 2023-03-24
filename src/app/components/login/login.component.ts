import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticateComponent } from '../authenticate/authenticate.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string | undefined;

  constructor(
    private authService: AuthenticateComponent, 
    private router: Router) { }

  ngOnInit() {
  }

  showMessage(t: string, m: string, type: any = 'warning') {
    Swal.fire({
      title: t,
      html: m,
      icon: type,
      confirmButtonColor: '#032E58',
  });
}

login() {
  this.authService.login(this.email, this.password).subscribe(
    response => {
      if (response.success) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage = response.message;
      }
    },
    error => {
      console.error(error);
      this.showMessage('Atenção', 'E-mail ou senha incorretos', 'warning')
    }
  );
}

}
