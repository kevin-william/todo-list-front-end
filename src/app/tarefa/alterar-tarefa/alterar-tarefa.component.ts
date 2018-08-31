import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../Tarefa';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-tarefa',
  templateUrl: './alterar-tarefa.component.html'  
})
export class AlterarTarefaComponent implements OnInit{
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.tarefaService.getTarefa(id)
      .subscribe(tarefa => {
        this.tarefa = tarefa;
        console.log(JSON.stringify(tarefa));
      }, 
      err=> {console.log(err.message)});
  }

  constructor(private tarefaService: TarefaService, private activatedRoute: ActivatedRoute, private router: Router) { }  

  tarefa: Tarefa = new Tarefa();
  
  onSubmit(f: NgForm){
    this.tarefaService.updateTarefa(this.tarefa)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/listarTarefas'])
      },
      err => {
        console.log(err.message);
      })
  }


}
