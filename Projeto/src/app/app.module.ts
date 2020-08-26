import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotasComponent } from './notas/notas.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/services/login.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
