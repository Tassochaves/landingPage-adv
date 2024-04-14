import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullApiService } from '../../services/contentfull-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-atuacao-destaque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-atuacao-destaque.component.html',
  styleUrl: './area-atuacao-destaque.component.scss'
})
export class AreaAtuacaoDestaqueComponent implements OnInit{
  areaDestaque$: Observable<any> | undefined;

  constructor(
    private contenfullApi: ContentfullApiService,
    private route: ActivatedRoute){}


    ngOnInit(): void {
      this.areaDestaque$ = this.contenfullApi.obterDadosPorId('3Ce0f23EHjzX1GbJ4E7rEy');

      // this.route.params.subscribe(
      //   params =>{
      //     const id = params['id'];
      //     this.areaDestaque$ = this.contenfullApi.obterDadosPorId(id);
      //   }
      // )
    }


}
