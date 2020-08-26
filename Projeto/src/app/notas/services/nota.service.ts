import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NotasFiltro } from '../models/NotasFiltro';


var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
    providedIn: 'root'
  })
export class NotaService {
    urlNota = 'https://localhost:44336/api/nota'; 
    urlHistorico = 'https://localhost:44336/api/historico';

    constructor(private http: HttpClient) {}


    listarNotas(idUsuario: number, filtro: NotasFiltro) {
        const apiurl = `${this.urlNota}/lista/${idUsuario}`
        return this.http.post(apiurl,filtro);
    }

    registrarHistorico(idUsuario: number, idNota: number){
        const apiurl = `${this.urlHistorico}/registrar/${idUsuario}/${idNota}`
        return this.http.post(apiurl,null);
    }
}
