import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from './auth.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentTokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
      this.currentTokenSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('access_token')));
      this.currentToken = this.currentTokenSubject.asObservable();
  }

  apiUrl: string = environment.apiBaseUrl;

  public get currentTokenValue(): string {
      return this.currentTokenSubject.value;
  }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
      return this.http.post<any>(this.apiUrl + `/oauth/token`, body, { headers: headers })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.access_token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('access_token', JSON.stringify(user.access_token));
                  this.currentTokenSubject.next(user.access_token);
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('access_token');
      this.currentTokenSubject.next(null);
  }
}
