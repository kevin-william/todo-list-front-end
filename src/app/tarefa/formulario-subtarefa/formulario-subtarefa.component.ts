import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SubTarefa } from '../SubTarefa';
import { SubTarefaService } from '../subTarefa.service';

@Component({
  selector: 'tf-formulario-subtarefa',
  templateUrl: './formulario-subtarefa.component.html'
})
export class FormularioSubtarefaComponent {

  constructor(private subTarefaService: SubTarefaService, private activatedRoute: ActivatedRoute, private router: Router) { }  

  subtarefa = new SubTarefa();

  onSubmit(f: NgForm){
    const id =  this.activatedRoute.snapshot.params.id;
    this.subtarefa.idTarefa = id;    
    this.subTarefaService.setSubTarefa(this.subtarefa)
      .subscribe(
        res=> {
          console.log(JSON.stringify(res));
          this.router.navigate(['exibirTarefa/'+id]);
        },
        err => console.log(err.message)

      );
  }

}
