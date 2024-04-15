import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from '../../services/infor-pagina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  inforPagina!: any;

  constructor(private inforPaginaService: InforPaginaService){}

  ngOnInit(): void {
    console.log(this.obterInforLocal());
  }

   obterInforLocal(){
     this.inforPaginaService.obterInforPagina().subscribe(
      (response: any) =>{
        this.inforPagina = response;
      });
   }

}
