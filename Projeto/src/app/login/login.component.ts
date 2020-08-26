import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from './services/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Usuario } from './models/Usuario';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  public form: FormGroup;
  public fbGroup = {
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  };
  constructor(
    private service: LoginService,
    private fb: FormBuilder,
    private router: Router) {
    this.form = fb.group(this.fbGroup);
  }

  ngOnInit() {
  }


  Logar() {

    const me = this;
    var email = this.fbGroup.email.value;
    var senha = this.fbGroup.senha.value;



    this.service.autorizarLogin(email, senha).subscribe(resp => {

      if (resp == true) {
        me.service.buscarUsuario(email).subscribe(resp => {

          localStorage.setItem('usuarioLogado', JSON.stringify(resp as Usuario));

          this.router.navigate(['/notas'])
        })
      }
    });
  }
}
