import { NotionApiService } from './services/contentfull-api.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NgFor } from '@angular/common';
import { AreaAtuacao } from './models/area-atuacao';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, NgFor]
})
export class AppComponent implements OnInit{
  titulo: string = '';
  descricao: string = '';
  img: string = '';
  title = 'landpage-adv';
  areaAtuacao: AreaAtuacao[]=[];

  constructor(private notioApi: NotionApiService){
  }

  ngOnInit(): void {
    this.obterAtuacao();
  }


  obterAtuacao(){
    this.notioApi.obeterAreaAtuacao$().subscribe({
      next: (result) =>{
        this.titulo = this.areaAtuacao = result.fields.titulo;
        this.descricao = this.areaAtuacao = result.fields.descricao;
        this.img = this.areaAtuacao = result.fields.img;
      },
      error: (err) =>{console.log(err)}
    });
  }
}
