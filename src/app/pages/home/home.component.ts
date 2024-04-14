import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { AreaAtuacaoComponent } from "../../components/area-atuacao/area-atuacao.component";
import { AreaAtuacaoDestaqueComponent } from "../../components/area-atuacao-destaque/area-atuacao-destaque.component";
import { environment } from '../../../environments/environment.development';
import { AdvogadoInforComponent } from "../../components/advogado-infor/advogado-infor.component";
import { ContentfullApiService } from '../../services/contentfull-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, FooterComponent, HeaderComponent, ContactComponent, AreaAtuacaoComponent, AreaAtuacaoDestaqueComponent, AdvogadoInforComponent, RouterLink]
})
export class HomeComponent implements OnInit{
  areaAtuacaoDestaque: boolean = false;
  meusDadosApi$!: Observable<any>;

  whatsapp: string = environment.API_WHATSAPP;

  constructor(private contenfullApi: ContentfullApiService){}

  ngOnInit(): void {
    this.meusDadosApi$ = this.contenfullApi.obterDados();
  }


   exibirareaAtuacaoDestaque() {
     this.areaAtuacaoDestaque = true;
   }
}
