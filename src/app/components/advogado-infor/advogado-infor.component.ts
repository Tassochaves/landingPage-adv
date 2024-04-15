import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InforPaginaService } from '../../services/infor-pagina.service';

@Component({
  selector: 'app-advogado-infor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advogado-infor.component.html',
  styleUrl: './advogado-infor.component.scss'
})
export class AdvogadoInforComponent implements OnInit{
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
