import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';
import { TarefaModule } from './tarefa/tarefa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TarefaModule, 
    AppRoutingModule,
    ErrosModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
