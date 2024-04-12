import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullApiService } from '../../services/contentfull-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advogado-infor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advogado-infor.component.html',
  styleUrl: './advogado-infor.component.scss'
})
export class AdvogadoInforComponent implements OnInit{
  meusDadosApi$: Observable<any> | undefined;

  constructor(private contenfullApi: ContentfullApiService){}

  ngOnInit(): void {
    this.meusDadosApi$ = this.contenfullApi.obterDados();
  }

}
