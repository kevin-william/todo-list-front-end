import { Component, OnInit } from '@angular/core';
import { SubTarefaService } from '../subTarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTarefa } from '../SubTarefa';

@Component({
  selector: 'app-remover-subtarefa',
  templateUrl: './remover-subtarefa.component.html'
})
export class RemoverSubtarefaComponent implements OnInit {

  constructor(private subTarefaService: SubTarefaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  subTarefa = new SubTarefa();
 
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.subTarefaService.getSubTarefa(id)
      .subscribe(
        subtarefa => this.subTarefa = subtarefa,
        err => console.log(err.message)
      );
  }
  removerSubTarefa(){    
    this.subTarefaService.deleteSubTarefa(this.subTarefa.idSubTarefa)
      .subscribe(
        res=>{
          console.log(JSON.stringify(res));
          this.router.navigate(['/exibirTarefa/'+this.subTarefa.idTarefa])
        },
        err=> console.log(err.message)
      );
  }

}
