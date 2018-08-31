import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'ap-lista',
  templateUrl: './lista-tarefas.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]  
})
export class ListaTarefasComponent implements OnInit {

  constructor(private tarefaService: TarefaService) { }

  // tarefas = [
  //   {titulo: "titulo 1", descricao: "Descrição 1"},
  //   {titulo: "titulo 2", descricao: "Descrição 2"}
  // ];

  tarefas = [];
  percentual = 0;    

  ngOnInit() {
    this.tarefaService.getTarefas()
    .subscribe(
      tarefas => {
        this.tarefas = tarefas;

        this.tarefaService.obterPercentualDeTarefasFinalizadas()
          .subscribe(
            p => this.percentual = p,
            err => console.log(err.message)
          )

      },
      err => {
        console.log(err.message);
      }
    );

  }

}
