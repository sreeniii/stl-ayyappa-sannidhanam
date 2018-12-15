import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    apiUrl: string = environment.apiBaseUrl;

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + `/users`);
    }

    getById(id: number) {
        return this.http.get(this.apiUrl + `/users/${id}`);
    }

    register(user: User) {
        return this.http.post(this.apiUrl + `/users/register`, user);
    }

    update(user: User) {
        return this.http.put(this.apiUrl + `/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + `/users/${id}`);
    }
}
