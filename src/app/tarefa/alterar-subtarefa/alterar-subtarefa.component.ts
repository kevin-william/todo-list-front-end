import { Component, OnInit } from '@angular/core';
import { SubTarefaService } from '../subTarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTarefa } from '../SubTarefa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tf-alterar-subtarefa',
  templateUrl: './alterar-subtarefa.component.html'
})
export class AlterarSubtarefaComponent implements OnInit {

  constructor(private subtarefaService: SubTarefaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  subtarefa = new SubTarefa();

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.subtarefaService.getSubTarefa(id)
      .subscribe(subtarefa => this.subtarefa = subtarefa, 
        err => console.log(err.message));
  }

  onSubmit(f: NgForm){
    this.subtarefaService.updateSubTarefa(this.subtarefa)
      .subscribe(res => 
        {
          console.log(JSON.stringify(res));
          this.router.navigate(['/exibirTarefa/'+this.subtarefa.idTarefa]);
        }, 
      err => console.log(err.message));
  }

}
