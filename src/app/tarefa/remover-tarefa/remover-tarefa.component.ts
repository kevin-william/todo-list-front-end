import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-remover-tarefa',
  templateUrl: './remover-tarefa.component.html'
})
export class RemoverTarefaComponent implements OnInit {

  constructor(private tarefasService: TarefaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  tarefa ="";

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.tarefasService.getTarefa(id)
    .subscribe(tarefa => this.tarefa = tarefa.titulo, 
      err => console.log(err.message));
  }

  removeTarefa(){
    const id = this.activatedRoute.snapshot.params.id;    
    this.tarefasService.deleteTarefa(id)
    .subscribe(res => 
      {      
        console.log(JSON.stringify(res));
        this.router.navigate(['/listarTarefas']);
      }, 
    err=> {console.log("erro: "+err.message)})
  }

}
