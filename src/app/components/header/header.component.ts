import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  whatsapp: string = environment.API_WHATSAPP;

  @ViewChild('header') public header!: ElementRef;
  ngAfterViewInit(): void {

    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        this.header.nativeElement.classList.add('header-scrolled');
      } else {
        this.header.nativeElement.classList.remove('header-scrolled');
      }
    })
  }



}
