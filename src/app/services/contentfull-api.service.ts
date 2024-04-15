import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../../environments/environment.development';
import { Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfullApiService {
  constructor() { }

  private client = createClient({
    space: environment.SPACE_ID,
    accessToken: environment.ACESS_TOKEN
  });


  obterDados(): Observable<any>{
    const promise = this.client.getEntries();
    return from(promise);
  }

  obterDadosPorId(id: string){
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
