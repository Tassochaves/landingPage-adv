import { Injectable, signal } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../../environments/environment.development';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfullApiService {

  constructor() { }

  private client = createClient({
    space: environment.SPACE_ID,
    accessToken: environment.ACESS_TOKEN
  });

  obterDados(){
    const promise = this.client.getEntries();
    return from(promise);
  }

  obterDadosPorId(id: string){
    const promise = this.client.getEntry(id);
    console.log(promise);
    return from(promise);
  }
}
