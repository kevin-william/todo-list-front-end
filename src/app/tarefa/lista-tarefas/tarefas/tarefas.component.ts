import { Component,Input } from '@angular/core';
import { TarefaService } from '../../tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from '../../Tarefa';

@Component({
  selector: 'ap-tarefas',
  templateUrl: './tarefas.component.html'  
})
export class TarefasComponent {

  constructor(private tarefaService: TarefaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  @Input() titulo="";
  @Input() descricao="";
  @Input() contagem="";
  @Input() idTarefa="";
  @Input() finalizado=false;
  
  finalizarTarefa(idTarefa: number){              
    this.tarefaService.finalizarTarefa(idTarefa, !this.finalizado)
      .subscribe(res => {
        console.log(JSON.stringify(res));
        window.location.reload(true);                   
        },
        err => console.log(err.message)
      );
  }

}
