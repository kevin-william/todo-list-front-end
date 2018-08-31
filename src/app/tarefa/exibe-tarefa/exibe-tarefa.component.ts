import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../Tarefa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibe-tarefa',
  templateUrl: './exibe-tarefa.component.html'
})
export class ExibeTarefaComponent implements OnInit {

  constructor(private tarefaService: TarefaService, private activatedRoute: ActivatedRoute) { }

  tarefa = new Tarefa();

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.tarefaService.getTarefa(id)
      .subscribe(
        tarefa => 
        {
          console.log(tarefa);
          this.tarefa = tarefa;
        }, 
        err => console.log(err.message)
      );
  }

}
