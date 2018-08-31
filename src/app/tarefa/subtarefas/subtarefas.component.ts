import { Component,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SubTarefaService } from '../subTarefa.service';
import { SubTarefa } from '../SubTarefa';
import { ISubTarefa } from '../ISubTarefa';

@Component({
  selector: 'tf-subtarefas',
  templateUrl: './subtarefas.component.html',
  styleUrls: ['./subtarefas.component.css']
})
export class SubtarefasComponent  {

  constructor(private subTarefaService: SubTarefaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  @Input() titulo="";
  @Input() descricao="";
  @Input() finalizado=false;    
  @Input() idSubtarefa="";
  
  finalizarSubtarefa(idSubtarefa: number){
    const id = this.activatedRoute.snapshot.params.id;    
    this.subTarefaService.finalizarSubTarefa(idSubtarefa)
      .subscribe(res => {
          console.log(JSON.stringify(res));
          window.location.reload(true);                   
        },err=> console.log(err.message)
      );
  }
}
