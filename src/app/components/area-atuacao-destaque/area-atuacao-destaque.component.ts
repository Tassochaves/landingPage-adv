import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfullApiService } from '../../services/contentfull-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-atuacao-destaque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-atuacao-destaque.component.html',
  styleUrl: './area-atuacao-destaque.component.scss'
})
export class AreaAtuacaoDestaqueComponent implements OnInit{
  areaDestaque$: Observable<any> | undefined;
  idAreaDestaque: string = environment.ID_AREA_DESTAQUE;

  constructor(
    private contenfullApi: ContentfullApiService){}


    ngOnInit(): void {
      this.areaDestaque$ = this.contenfullApi.obterDadosPorId(this.idAreaDestaque);
    }


}
