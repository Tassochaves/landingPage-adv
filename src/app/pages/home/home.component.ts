import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { AreaAtuacaoComponent } from "../../components/area-atuacao/area-atuacao.component";
import { AreaAtuacaoDestaqueComponent } from "../../components/area-atuacao-destaque/area-atuacao-destaque.component";
import { environment } from '../../../environments/environment.development';
import { AdvogadoInforComponent } from "../../components/advogado-infor/advogado-infor.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FooterComponent, HeaderComponent, ContactComponent, AreaAtuacaoComponent, AreaAtuacaoDestaqueComponent, AdvogadoInforComponent]
})
export class HomeComponent {
  whatsapp: string = environment.API_WHATSAPP;
}
