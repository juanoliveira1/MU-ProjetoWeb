import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};


@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    url = 'https://localhost:44336/api/usuario'; 

    constructor(private http: HttpClient) {}


    autorizarLogin(login: string, senha: string) {
        const apiurl = `${this.url}/autenticar/${login}/${senha}`
        return this.http.get(apiurl);
    }

    buscarUsuario(login: string){
        const apiurl = `${this.url}/${login}`
        return this.http.get(apiurl); 
    }
}
