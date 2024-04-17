import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

// @ts-ignore
const $: any = window['$']
@Component({
  selector: 'app-msg-enviada',
  standalone: true,
  imports: [],
  templateUrl: './msg-enviada.component.html',
  styleUrl: './msg-enviada.component.scss'
})
export class MsgEnviadaComponent implements AfterViewInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  
  @ViewChild('myModal') modal: any;

  ngAfterViewInit(): void {
    this.openModal();
  }

  openModal(){
    const modal = this.elRef.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'block');

    setTimeout(()=>{
      this.closeModal()
    }, 2000)
  } 
  
  closeModal(){
    const modal = this.elRef.nativeElement.querySelector('#myModal');
    this.renderer.setStyle(modal, 'display', 'none');
  }
}
