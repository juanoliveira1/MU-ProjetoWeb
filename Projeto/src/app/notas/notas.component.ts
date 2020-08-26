import { Component, OnInit } from '@angular/core';
import { NotaService } from './services/nota.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login/services/login.service';
import { NotasFiltro } from './models/NotasFiltro';
import { JsonPipe } from '@angular/common';


export class Nota {
  idNota: number;
  dataEmissao: Date;
  VMercadorias: number;
  VDesconto: number;
  VFrete: number;
  Vtotal: number;
}

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  public ListaNotas: Array<Nota> = [];
  public usuario;
  public form: FormGroup;
  public fbGroup = {
    dataInicio: new FormControl('', [Validators.required]),
    dataFim: new FormControl('', [Validators.required]),
  };

  constructor(
    private serviceNota: NotaService,
    private serviceLogin: LoginService,
    private fb: FormBuilder
  ) {
    this.form = fb.group(this.fbGroup);
  }

  displayedColumns: string[]
    = ['idNota', 'dataEmissao', 'VMercadorias', 'VDesconto', 'VFrete', 'Vtotal', 'Acao'];
  dataSource = this.ListaNotas;

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }



  Buscar() {
    this.PopularLista();
  }

  Acao(idNota) {
    const me = this;
    this.serviceNota.registrarHistorico(me.usuario.idUsuario, idNota).subscribe();
    me.dataSource = null;
    me.PopularLista();
   
  }

  PopularLista(){

    const me = this;
    var filtro = new NotasFiltro();

    filtro.DataInicio = this.fbGroup.dataInicio != null ? this.fbGroup.dataInicio.value : null;
    filtro.DataFim = this.fbGroup.dataFim != null ? this.fbGroup.dataFim.value : null;

    // filtro.DataInicio = new Date(2020,5,5);
    // filtro.DataFim = new Date(2020,10,10);

    this.serviceNota.listarNotas(me.usuario.idUsuario, filtro).subscribe((resp: any) => {
      this.dataSource = resp;
    });
  }

  
}