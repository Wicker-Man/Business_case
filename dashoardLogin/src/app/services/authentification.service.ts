import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiLoginData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public estConnecte = true;
  public token!: string;

  constructor(private clientHttp: HttpClient) { }

  Auth(email: string, password: string)/* :Promise <boolean>*/ {
    let url = 'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/stats/2001/2021';

    return lastValueFrom(
      this.clientHttp.post<ApiLoginData>(
        url,
        JSON.stringify({
          email: email,
          password: password,
        })
      )
    )

  }


}
