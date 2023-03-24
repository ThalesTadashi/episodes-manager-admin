import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface AuthenticationResponse {
  success: boolean;
  message: string;
  token?: string;
}
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map(response => {
          if (response.success && response.token) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }
}