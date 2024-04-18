import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

// @ts-ignore
const $: any = window['$']
@Component({
  selector: 'app-msg-enviada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './msg-enviada.component.html',
  styleUrl: './msg-enviada.component.scss'
})
export class MsgEnviadaComponent implements AfterViewInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  
  ngAfterViewInit(): void {
    this.openModal();
  }

  openModal(){
    const modal = this.elRef.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'block');
  } 
}
