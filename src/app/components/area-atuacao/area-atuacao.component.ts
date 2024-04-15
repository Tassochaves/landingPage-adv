import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullApiService } from '../../services/contentfull-api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-area-atuacao',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './area-atuacao.component.html',
  styleUrl: './area-atuacao.component.scss'
})
export class AreaAtuacaoComponent implements OnInit{
  meusDadosApi$: Observable<any>| undefined;

  constructor(
    private contenfullApi: ContentfullApiService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.meusDadosApi$ = this.contenfullApi.obterDados();
  }
}
