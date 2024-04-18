import { Component, OnInit, ViewChild } from '@angular/core';
import { InforPaginaService } from '../../services/infor-pagina.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  accessKeyStaticForms = environment.STATICFORMS_KEY;
  redirectSendMsg = environment.REDIRECT_SEND_MSG;
  inforPagina: any;

  constructor(private inforPaginaService: InforPaginaService){}

  ngOnInit(): void {
    this.obterInforLocal();
  }

   obterInforLocal(){
     this.inforPaginaService.obterInforPagina().subscribe(
      (response: any) =>{
        this.inforPagina = response;
      });
   }

}
