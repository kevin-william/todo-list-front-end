import { Component } from "@angular/core";
import {NgForm} from "@angular/forms";

import { Tarefa } from "../Tarefa";
import { TarefaService } from "../tarefa.service";
import { Router } from "@angular/router";

@Component({
    selector:"ap-form",
    templateUrl:"./formulario-tarefa.component.html"
})
export class FormularioTarefaComponent{ 
    
    constructor(private tarefaService: TarefaService, private router: Router){ }

    tarefa = new Tarefa();

    onSubmit(f: NgForm){        
        this.tarefaService.setTarefa(this.tarefa).
        subscribe(res => {
            console.log(res);
            this.router.navigate(['/listarTarefas']);
          },
          err => {
            console.log(err.message);
          });        
    }
}