import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "https://api.github.com/"
  constructor(private httpClient: HttpClient) { }

  async getUserByName(name: string): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}search/users?q=${name}`))
  }

  async getUserByLogin(login: string): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}users/${login}`))
  }
}

// https://api.github.com/users/LucasA75
// https://api.github.com/search/users?q=LucasA75
