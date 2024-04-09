import { NotionApiService } from './services/notion-api.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { environment } from '../environments/environment.development';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'landpage-adv';
  constructor(private notioApi: NotionApiService){
    console.log(this.obterAtuacoesCadastradas());
  }

  obterAtuacoesCadastradas(){
    this.notioApi.obterAtuacoes().subscribe(atuacoes => this.title)
  }
}
